// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImportedLogsByProdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether logs are automatically ingested for new accounts. Valid values:
   * 
   * - 1: Logs are automatically ingested.
   * 
   * - 0: Logs are not automatically ingested.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  autoImported?: number;
  /**
   * @remarks
   * The multicloud code. Valid values:
   * 
   * - qcloud: Tencent Cloud.
   * 
   * - aliyun: Alibaba Cloud.
   * 
   * - hcloud: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * Indicates whether the log is ingested. Valid values:
   * 
   * - 1: The log is ingested.
   * 
   * - 0: The log is not ingested.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  imported?: number;
  /**
   * @remarks
   * The number of users who have ingested the log.
   * 
   * @example
   * 2
   */
  importedUserCount?: number;
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The display code of the log.
   * 
   * @example
   * ${siem.prod. cloud_siem_waf_xxxxx}
   */
  logMdsCode?: string;
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * - 1: Ingested on the threat analysis side.
   * 
   * - 2: Predefined Simple Log Service log. -3: Custom Simple Log Service log.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  logType?: number;
  /**
   * @remarks
   * The time when the log was last ingested.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The code of the product to which the log belongs.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The total number of users for the log.
   * 
   * @example
   * 5
   */
  totalUserCount?: number;
  /**
   * @remarks
   * The number of users who have not ingested the log.
   * 
   * @example
   * 3
   */
  unImportedUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoImported: 'AutoImported',
      cloudCode: 'CloudCode',
      imported: 'Imported',
      importedUserCount: 'ImportedUserCount',
      logCode: 'LogCode',
      logMdsCode: 'LogMdsCode',
      logType: 'LogType',
      modifyTime: 'ModifyTime',
      prodCode: 'ProdCode',
      totalUserCount: 'TotalUserCount',
      unImportedUserCount: 'UnImportedUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoImported: 'number',
      cloudCode: 'string',
      imported: 'number',
      importedUserCount: 'number',
      logCode: 'string',
      logMdsCode: 'string',
      logType: 'number',
      modifyTime: 'string',
      prodCode: 'string',
      totalUserCount: 'number',
      unImportedUserCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImportedLogsByProdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListImportedLogsByProdResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListImportedLogsByProdResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

