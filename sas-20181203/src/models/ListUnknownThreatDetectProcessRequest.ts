// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The analysis result. Valid values:
   * 
   * - **black**: abnormal process
   * 
   * - **white**: normal process
   * 
   * @example
   * white
   */
  analyzeResult?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range for the first detection, in milliseconds.
   * 
   * @example
   * 1768891966345
   */
  firstTimeEnd?: number;
  /**
   * @remarks
   * The start of the time range for the first detection, in milliseconds.
   * 
   * @example
   * 1768891966344
   */
  firstTimeStart?: number;
  /**
   * @remarks
   * The MD5 value of the file.
   * 
   * @example
   * 0552c44e243abdea1729d4507bce****
   */
  md5?: string;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /etc/test
   */
  path?: string;
  /**
   * @remarks
   * The process path.
   * 
   * @example
   * /bin/rm
   */
  processPath?: string;
  /**
   * @remarks
   * The server name or IP address.
   * 
   * @example
   * 172.20.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The SHA-256 value of the file.
   * 
   * @example
   * f204693a7d2ce99d6c4434e550d985ee1c7be7cb5dd9a76094369af0d2******
   */
  sha256?: string;
  /**
   * @remarks
   * The UUID of the server to query.
   * 
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

