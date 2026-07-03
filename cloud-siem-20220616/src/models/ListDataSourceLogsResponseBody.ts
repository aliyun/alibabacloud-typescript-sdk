// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams extends $dara.Model {
  /**
   * @remarks
   * The code of the log parameter.
   * 
   * @example
   * region_code
   */
  paraCode?: string;
  /**
   * @remarks
   * The value of the log parameter.
   * 
   * @example
   * ap-guangzhou
   */
  paraValue?: string;
  static names(): { [key: string]: string } {
    return {
      paraCode: 'ParaCode',
      paraValue: 'ParaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paraCode: 'string',
      paraValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs extends $dara.Model {
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
   * The ID of the log. This ID is an MD5 hash value that is calculated by threat analysis based on specific parameters.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  logInstanceId?: string;
  /**
   * @remarks
   * The display code of the log.
   * 
   * @example
   * ${siem.prod.cloud_siem_waf_xxxxx}
   */
  logMdsCode?: string;
  /**
   * @remarks
   * The detailed parameters for the log.
   */
  logParams?: ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams[];
  /**
   * @remarks
   * The status of the log collection task. Valid values:
   * 
   * - 1: collected.
   * 
   * - 0: not collected.
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  static names(): { [key: string]: string } {
    return {
      logCode: 'LogCode',
      logInstanceId: 'LogInstanceId',
      logMdsCode: 'LogMdsCode',
      logParams: 'LogParams',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCode: 'string',
      logInstanceId: 'string',
      logMdsCode: 'string',
      logParams: { 'type': 'array', 'itemType': ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams },
      taskStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logParams)) {
      $dara.Model.validateArray(this.logParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code for the cloud service provider. Valid values:
   * 
   * - qcloud: Tencent Cloud.
   * 
   * - aliyun: Alibaba Cloud.
   * 
   * - hcloud: Huawei Cloud
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. This ID is an MD5 hash value that is calculated by threat analysis based on specific parameters.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The list of logs for the data source.
   */
  dataSourceInstanceLogs?: ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs[];
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * waf kafka
   */
  dataSourceInstanceName?: string;
  /**
   * @remarks
   * The remarks on the data source.
   * 
   * @example
   * waf kafka
   */
  dataSourceInstanceRemark?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the log belongs.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceInstanceLogs: 'DataSourceInstanceLogs',
      dataSourceInstanceName: 'DataSourceInstanceName',
      dataSourceInstanceRemark: 'DataSourceInstanceRemark',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceLogs: { 'type': 'array', 'itemType': ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs },
      dataSourceInstanceName: 'string',
      dataSourceInstanceRemark: 'string',
      subUserId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceInstanceLogs)) {
      $dara.Model.validateArray(this.dataSourceInstanceLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListDataSourceLogsResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
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
      data: ListDataSourceLogsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

