// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImportedLogsByProdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the log is automatically added to the threat analysis feature within newly added accounts. Valid values:
   * 
   * *   1: yes.
   * *   0: no.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  autoImported?: number;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud.
   * *   aliyun: Alibaba Cloud.
   * *   hcloud: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * Indicates whether the log is added to the threat analysis feature. Valid values:
   * 
   * *   1: yes.
   * *   0: no.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  imported?: number;
  /**
   * @remarks
   * The number of users who have added the log.
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
   * The type of log. Valid values:
   *  - 1: the log produced by other product
   *  - 2: the predefined log
   *  - 3: the custom log
   * 
   * @example
   * 1
   */
  logType?: number;
  /**
   * @remarks
   * The time when the log was last added.
   * 
   * @example
   * 2023-11-23 12:30:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The code of the cloud service to which the log belongs.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The total number of users who have the log.
   * 
   * @example
   * 5
   */
  totalUserCount?: number;
  /**
   * @remarks
   * The number of users who have not added the log.
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

