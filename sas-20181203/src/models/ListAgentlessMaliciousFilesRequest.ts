// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessMaliciousFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the vulnerability is handled. Valid values:
   * 
   * *   Y: The vulnerability is handled.
   * *   N: The vulnerability is not handled.
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
   * The name of the malicious file that you want to query.
   * 
   * > Fuzzy match is supported.
   * 
   * @example
   * WebShell
   */
  fuzzyMaliciousName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The severities of the malicious files. Separate multiple values with commas (,). Valid values:
   * 
   * *   serious
   * *   suspicious
   * *   remind
   * 
   * @example
   * remind,suspicious
   */
  levels?: string;
  /**
   * @remarks
   * The MD5 hash value of the malicious file.
   * 
   * @example
   * d836968041f7683b5459****
   */
  maliciousMd5?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * Valid values when Lang is set to zh:
   * 
   * *   WebShell
   * *   Malicious Software
   * *   Malicious Script
   * 
   * Valid values when Lang is set to en:
   * 
   * *   WebShell
   * *   Malicious Software
   * *   Malicious Script
   * 
   * @example
   * WebShell
   */
  maliciousType?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The remarks for the asset affected by the vulnerability. The value can be the private IP address, public IP address, or name of the asset. Fuzzy match is supported.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The source of the malicious file.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The UUID of the asset.
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

