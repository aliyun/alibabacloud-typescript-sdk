// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImportedLogsByProdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether new accounts are automatically onboarded. Valid values:
   * - 1: Automatically onboarded. 
   * - 0: Not automatically onboarded.
   * 
   * @example
   * 1
   */
  autoImported?: number;
  /**
   * @remarks
   * The multi-cloud code. Valid values:
   * - hcloud: Huawei Cloud.
   * - qcloud: Tencent Cloud.
   * - aliyun: Alibaba Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * Indicates whether the log is onboarded. Valid values:
   * - 1: Onboarded. 
   * - 0: Not onboarded.
   * 
   * @example
   * 1
   */
  imported?: number;
  /**
   * @remarks
   * The number of users that have onboarded the log.
   * 
   * @example
   * 2
   */
  importedUserCount?: number;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The log display code.
   * 
   * @example
   * ${siem.prod. cloud_siem_waf_xxxxx}
   */
  logMdsCode?: string;
  /**
   * @remarks
   * The log type. Valid values:
   * - 1: Centralized onboarding. 
   * - 2: Predefined Log Service. 
   * - 3: Custom Log Service.
   * 
   * @example
   * 1
   */
  logType?: number;
  /**
   * @remarks
   * The last onboarding time of the log. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The product code corresponding to the log.
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
   * The number of users that have not onboarded the log.
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
   * The response data.
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

