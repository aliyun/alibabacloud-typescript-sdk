// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectProcessRequest extends $dara.Model {
  /**
   * @example
   * white
   */
  analyzeResult?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1768891966345
   */
  firstTimeEnd?: number;
  /**
   * @example
   * 1768891966344
   */
  firstTimeStart?: number;
  /**
   * @example
   * 0552c44e243abdea1729d4507bce****
   */
  md5?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * /etc/test
   */
  path?: string;
  /**
   * @example
   * /bin/rm
   */
  processPath?: string;
  /**
   * @example
   * 172.20.XX.XX
   */
  remark?: string;
  /**
   * @example
   * f204693a7d2ce99d6c4434e550d985ee1c7be7cb5dd9a76094369af0d2******
   */
  sha256?: string;
  /**
   * @example
   * 50d213b4-3a35-427a-b8a5-04b0c7e1****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      analyzeResult: 'AnalyzeResult',
      currentPage: 'CurrentPage',
      firstTimeEnd: 'FirstTimeEnd',
      firstTimeStart: 'FirstTimeStart',
      md5: 'Md5',
      pageSize: 'PageSize',
      path: 'Path',
      processPath: 'ProcessPath',
      remark: 'Remark',
      sha256: 'Sha256',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeResult: 'string',
      currentPage: 'number',
      firstTimeEnd: 'number',
      firstTimeStart: 'number',
      md5: 'string',
      pageSize: 'number',
      path: 'string',
      processPath: 'string',
      remark: 'string',
      sha256: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

