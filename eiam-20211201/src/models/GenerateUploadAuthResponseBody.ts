// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * 认证的AccessId
   * 
   * @example
   * STS.NYgAmE3cyPoMDxtWgtwG3xxxx
   */
  accessId?: string;
  /**
   * @remarks
   * 预下载地址
   * 
   * @example
   * https://temp.oss.aliyuncs.com/idaas_ly77wa2oexrciw5v672vizxxxx/file_import/68866d21-0ab7-450d-b9e6-5b1eafe06xxxx
   */
  downLoadUrl?: string;
  /**
   * @example
   * eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoia2V5X3Z1ZWhjbmh2NWppcGhmZGJwcWpqd3dsemFhIn0..YetpxsPdqdLvAy6G.0Zy5meoTzvCuNfA_0w7E9ItY2uGu1v1BxR9i98KeHXv_P-sm9w1q0XPf5Fw.55V_jFq2t2ZHdjg5c7uxxxx
   */
  encryptedKey?: string;
  /**
   * @remarks
   * 过期时间
   * 
   * @example
   * 1766470716
   */
  expire?: number;
  /**
   * @remarks
   * bucket地址host
   * 
   * @example
   * https://temp.oss.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * 认证对应的key
   * 
   * @example
   * idaas-csv://idaas_ly77wa2oexrciw5v672vizxxxx
   * /file_import/68866d21-0ab7-450d-b9e6-5b1eafxxxx"
   */
  key?: string;
  /**
   * @example
   * fBLqWEvq3SbCj1cX/rtZoSPDVduOWdloOO2VN2+5Sxxxx
   */
  plaintextKey?: string;
  /**
   * @remarks
   * 认证的policy
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0xMi0yM1QwNjoxODozNi4zNTZaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjBdLHsiYnVja2V0IjoidGVtcC1pZGFhcy1laWFtLWNuLWhhbmd6aG91In0seyJrZXkiOiJpZGFhc19seTc3d2Eyb2V4cmNpdzV2Njcydml6eG12ZS9maWxlX2ltcG9ydC82ODg2NmQyMS0wYWI3LTQ1MGQtYjllNi01YjFlYWZlMDYzZTEifSx7Ingtb3NzLWZvcmJpZC1vdmVyd3JpdGUiOiJ0cnVlIn0seyJ4LW9zcy1vYmplY3QtYWNsIjoicHJpdmF0ZSJxxxx
   */
  policy?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * CAISzgJ1q6Ft5B2yfSjIr5rSCtfx3rxY562mRl7Fs2che8gfpbLg1zz2IHhMfXVpA+Afv/sxlG5Q7/wdlrp6SJtIXleCZtF94oxN9h2gb4fb4wgFPgjY08/LI3OaLjKm9u2wCryLYbGwU/OpbE++5U0X6LDmdDKkckW4OJmS8/BOZcgWWQ/KBlgvRq0hRG1YpdQdKGHaONu0LxfumRCwNkdzvRdmgm4NgsbWgO/ks0aO0wehm7BO+N6gfcD9NvMBZskvD42Hu8VtbbfE3SJq7BxHybx7lqQs+02c5onEXwALs0zXbLSErIU2dlBjH68hAOtFquPgnPtzt6nJkID62421pmiSr561rumAtyikcIvBXr5RHT3LoP1LA5UhHC1UotFVgGOaCXLbtuArXptaY/JiNL/0hFEpVt7knInNpUbntINy5f5fqzNMlShqKOXTK93xGoABgfahfEFC23BhLp3NnBxnaG/psewhUfRg/wYS9oE268EST0qPq0ZvzmZjsmtbtnFL8takNDOIdutBZeb9nngkEi7tYyVcwoYBnbJ3sopnFEVozB2VO5XuRHLBkOfB+2z1zD91KtoDajJxpT295Qm0ndFALS1tCGI452yRIrCHynggxxxxx
   */
  securityToken?: string;
  /**
   * @remarks
   * 认证的签名
   * 
   * @example
   * t3JyykEKg3kHQuUrhaXYxtboUxxxxx
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      downLoadUrl: 'DownLoadUrl',
      encryptedKey: 'EncryptedKey',
      expire: 'Expire',
      host: 'Host',
      key: 'Key',
      plaintextKey: 'PlaintextKey',
      policy: 'Policy',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      downLoadUrl: 'string',
      encryptedKey: 'string',
      expire: 'number',
      host: 'string',
      key: 'string',
      plaintextKey: 'string',
      policy: 'string',
      requestId: 'string',
      securityToken: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

