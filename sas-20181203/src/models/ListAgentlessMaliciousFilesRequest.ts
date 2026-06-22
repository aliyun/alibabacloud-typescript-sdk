// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessMaliciousFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the alert has been handled. Valid values:
   * 
   * - Y: handled
   * - N: not handled.
   * 
   * @example
   * Y
   */
  dealed?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 81****
   */
  eventId?: number;
  /**
   * @remarks
   * The name of the malicious file to query.
   * > Fuzzy match is supported.
   * 
   * @example
   * WebShell
   */
  fuzzyMaliciousName?: string;
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The severity levels. Separate multiple values with commas (,). Valid values:
   * 
   * - serious: urgent
   * - suspicious: suspicious
   * - remind: reminder.
   * 
   * @example
   * remind,suspicious
   */
  levels?: string;
  /**
   * @remarks
   * The MD5 hash of the malicious file.
   * 
   * @example
   * d836968041f7683b5459****
   */
  maliciousMd5?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * If Lang is set to zh, valid values:
   * 
   * - WebShell: WebShell
   * - 恶意软件: malware
   * - 恶意脚本: malicious script
   * 
   * If Lang is set to en, valid values:
   * 
   * - WebShell: WebShell
   * - Malicious Software: malware
   * - Malicious Script: malicious script.
   * 
   * @example
   * WebShell
   */
  maliciousType?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The asset information for the vulnerability query. You can set this parameter to the asset name, public IP address, or private IP address. Fuzzy match is supported.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The file source.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The unique identifier of the asset.
   * 
   * @example
   * d2d94e8b-bb25-4744-8004-1e08a53c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      eventId: 'EventId',
      fuzzyMaliciousName: 'FuzzyMaliciousName',
      lang: 'Lang',
      levels: 'Levels',
      maliciousMd5: 'MaliciousMd5',
      maliciousType: 'MaliciousType',
      pageSize: 'PageSize',
      remark: 'Remark',
      scanRange: 'ScanRange',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealed: 'string',
      eventId: 'number',
      fuzzyMaliciousName: 'string',
      lang: 'string',
      levels: 'string',
      maliciousMd5: 'string',
      maliciousType: 'string',
      pageSize: 'string',
      remark: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

