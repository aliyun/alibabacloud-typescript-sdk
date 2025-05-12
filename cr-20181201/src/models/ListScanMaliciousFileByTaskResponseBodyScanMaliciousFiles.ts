// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanMaliciousFileByTaskResponseBodyScanMaliciousFiles extends $dara.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2023-04-10 11:42:06
   */
  createTime?: number;
  /**
   * @remarks
   * The path of the file.
   * 
   * @example
   * tenant/0000000000000000/
   */
  filePath?: string;
  /**
   * @remarks
   * The time when the image was first scanned.
   * 
   * @example
   * 2023-04-10 11:42:06
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The severity of the malicious file.
   * 
   * @example
   * remind
   */
  level?: string;
  /**
   * @remarks
   * The MD5 hash value of the malicious file.
   * 
   * @example
   * e76c9759783cbbc9be0ff91ca3xxxxxx
   */
  maliciousMd5?: string;
  /**
   * @remarks
   * The type of the malicious file.
   * 
   * @example
   * Suspected to contain Webshell code
   */
  maliciousName?: string;
  /**
   * @remarks
   * The ID of the image scan task.
   * 
   * @example
   * fe2d8980-de45-4f55-b57d-e438e6d2e972
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The time when the image was updated.
   * 
   * @example
   * 2023-04-10 11:42:06
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      filePath: 'FilePath',
      firstScanTime: 'FirstScanTime',
      level: 'Level',
      maliciousMd5: 'MaliciousMd5',
      maliciousName: 'MaliciousName',
      scanTaskId: 'ScanTaskId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      filePath: 'string',
      firstScanTime: 'number',
      level: 'string',
      maliciousMd5: 'string',
      maliciousName: 'string',
      scanTaskId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

