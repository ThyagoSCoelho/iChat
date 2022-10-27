class NFController {
  static parse (req, res) {
    const data = req.body
    const parsed = {

      ide: data.nfeproc.nfe[0].infnfe[0].ide.map((val) => {
        return {
          cUf: parseInt(val.cuf[0]),
          cNf: parseInt(val.cnf[0]),
          natOp: val.natop[0],
          mod: val.mod[0],
          nNf: parseInt(val.nnf[0]),
          dhEmi: val.dhemi[0],
          tpNf: parseInt(val.tpnf[0]),
          idDest: parseInt(val.iddest[0]),
          cMunFG: parseInt(val.cmunfg[0]),
          tpImp: parseInt(val.tpimp[0]),
          tpEmis: parseInt(val.tpemis[0]),
          cDV: parseInt(val.cdv[0]),
          tpAmb: parseInt(val.tpamb[0]),
          finNFe: parseInt(val.finnfe[0]),
          indFinal: parseInt(val.indfinal[0]),
          indPres: parseInt(val.indpres[0]),
          procEmi: val.procemi[0],
          verProc: val.verproc[0]
        }
      }),

      emit: data.nfeproc.nfe[0].infnfe[0].emit.map((element) => {
        return {
          cnpj: element.cnpj[0],
          xnome: element.xnome[0],
          xlgr: element.enderemit[0].xlgr[0],
          nro: parseInt(element.enderemit[0].nro[0]),
          xbairro: element.enderemit[0].xbairro[0],
          cmun: element.enderemit[0].cmun[0],
          xmun: element.enderemit[0].xmun[0],
          uf: element.enderemit[0].uf[0],
          cep: element.enderemit[0].cep[0],
          cpais: element.enderemit[0].cpais[0],
          xpais: element.enderemit[0].xpais[0],
          fone: element.enderemit[0].fone[0],
          ie: element.ie[0],
          im: element.im[0],
          cnae: element.cnae[0],
          crt: element.crt[0]
        }
      }),

      dest: data.nfeproc.nfe[0].infnfe[0].dest.map((element) => {
        return {
          cpf: element.cpf[0],
          xnome: element.xnome[0],
          indiedest: element.indiedest[0]
        }
      }),

      produto: data.nfeproc.nfe[0].infnfe[0].det.map((item) => {
        return {
          cprod: item.prod[0].cprod[0],
          xprod: item.prod[0].xprod[0],
          ncm: item.prod[0].ncm[0],
          cfop: item.prod[0].cfop[0],
          ucom: item.prod[0].ucom[0],
          qcom: item.prod[0].qcom[0],
          vuncom: item.prod[0].vuncom[0],
          vprod: item.prod[0].vprod[0],
          icms: item.imposto[0].icms.map((val) => {
            return {
              icms: val.icmssn102[0].orig[0],
              csosn: val.icmssn102[0].csosn[0]
            }
          }),
          pis: item.imposto[0].pis.map((val) => {
            return {
              Cst: val.pisoutr[0].cst[0],
              vBc: val.pisoutr[0].vbc[0],
              pPis: val.pisoutr[0].ppis[0],
              vPis: val.pisoutr[0].vpis[0]
            }
          }),
          cofins: item.imposto[0].cofins.map((val) => {
            return {
              Cst: val.cofinsoutr[0].cst[0],
              vBc: val.cofinsoutr[0].vbc[0],
              pPis: val.cofinsoutr[0].pcofins[0],
              vPis: val.cofinsoutr[0].vcofins[0]
            }
          })
        }
      }),

      total: data.nfeproc.nfe[0].infnfe[0].total.map((val) => {
        return {
          vBC: val.icmstot[0].vbc[0],
          vICMS: val.icmstot[0].vicms[0],
          vICMSDeson: val.icmstot[0].vicmsdeson[0],
          vFCPUFDest: val.icmstot[0].vfcpufdest[0],
          vFCP: val.icmstot[0].vfcp[0],
          vBCST: val.icmstot[0].vbcst[0],
          vST: val.icmstot[0].vst[0],
          vFCPST: val.icmstot[0].vfcpst[0],
          vFCPSTRet: val.icmstot[0].vfcpstret[0],
          vProd: val.icmstot[0].vprod[0],
          vFrete: val.icmstot[0].vfrete[0],
          vSeg: val.icmstot[0].vseg[0],
          vDesc: val.icmstot[0].vdesc[0],
          vII: val.icmstot[0].vii[0],
          vIpi: val.icmstot[0].vipi[0],
          vIPIDevol: val.icmstot[0].vipidevol[0],
          vPIS: val.icmstot[0].vpis[0],
          vCOFINS: val.icmstot[0].vcofins[0],
          vOutro: val.icmstot[0].voutro[0],
          vNF: val.icmstot[0].vnf[0]
        }
      }),

      transp: parseInt(data.nfeproc.nfe[0].infnfe[0].transp[0].modfrete[0]),
      infAdic: data.nfeproc.nfe[0].infnfe[0].infadic[0].infcpl[0]
    }
    res.send(parsed)
  }
}

module.exports = NFController
