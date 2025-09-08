// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataProductListLogMapValue } from "./DataProductListLogMapValue";


export class ListDeliveryResponseBodyDataProductListLogListExtraParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the extended parameter.
   * 
   * @example
   * flag
   */
  key?: string;
  /**
   * @remarks
   * The value of the extended parameter.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryResponseBodyDataProductListLogList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the log delivery feature can be enabled or disabled. The feature can be enabled or disabled only by the administrator of the threat analysis feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  canOperateOrNot?: boolean;
  /**
   * @remarks
   * The extended parameter.
   */
  extraParameters?: ListDeliveryResponseBodyDataProductListLogListExtraParameters[];
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_config_log
   */
  logCode?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * audit log
   */
  logName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * audit log
   */
  logNameEn?: string;
  /**
   * @remarks
   * The language code of the log that is used to indicate the language in which the log is displayed.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_crack_from_beaver}
   */
  logNameKey?: string;
  /**
   * @remarks
   * The status of the log delivery. Valid values:
   * 
   * *   true: The logs are being delivered.
   * *   false: The log delivery feature is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The topic of the log in the Logstore. The value is an index field in the Logstore that can be used to distinguish different logs.
   * 
   * @example
   * sas_login_event
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      canOperateOrNot: 'CanOperateOrNot',
      extraParameters: 'ExtraParameters',
      logCode: 'LogCode',
      logName: 'LogName',
      logNameEn: 'LogNameEn',
      logNameKey: 'LogNameKey',
      status: 'Status',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canOperateOrNot: 'boolean',
      extraParameters: { 'type': 'array', 'itemType': ListDeliveryResponseBodyDataProductListLogListExtraParameters },
      logCode: 'string',
      logName: 'string',
      logNameEn: 'string',
      logNameKey: 'string',
      status: 'boolean',
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extraParameters)) {
      $dara.Model.validateArray(this.extraParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryResponseBodyDataProductList extends $dara.Model {
  /**
   * @remarks
   * The logs of the cloud services.
   */
  logList?: ListDeliveryResponseBodyDataProductListLogList[];
  /**
   * @remarks
   * The log group. For example, in Security Center, the logs of hosts and networks are stored in different groups. Key indicates the group information, and value indicates the logs in the group.
   */
  logMap?: { [key: string]: DataProductListLogMapValue[] };
  /**
   * @remarks
   * The code of the cloud service. Valid values:
   * 
   * *   qcloud_waf
   * *   qlcoud_cfw
   * *   hcloud_waf
   * *   hcloud_cfw
   * *   ddos
   * *   sas
   * *   cfw
   * *   config
   * *   csk
   * *   fc
   * *   rds
   * *   nas
   * *   apigateway
   * *   cdn
   * *   mongodb
   * *   eip
   * *   slb
   * *   vpc
   * *   actiontrail
   * *   waf
   * *   bastionhost
   * *   oss
   * *   polardb
   * 
   * @example
   * sas
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * Security Center
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      logMap: 'LogMap',
      productCode: 'ProductCode',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': ListDeliveryResponseBodyDataProductListLogList },
      logMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataProductListLogMapValue } },
      productCode: 'string',
      productName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logList)) {
      $dara.Model.validateArray(this.logList);
    }
    if(this.logMap) {
      $dara.Model.validateMap(this.logMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL that is displayed in charts.
   * 
   * @example
   * https://sls4service.console.aliyun.com/lognext/project/aliyun-cloudsiem-data-127608589417****-cn-shanghai
   * /dashboard/cloud-siem?isShare=true&hideTopbar=true&hideSidebar=true&ignoreTabLocalStorage=true
   */
  dashboardUrl?: string;
  /**
   * @remarks
   * Indicates whether the log delivery switch is displayed. Default value: true. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  displaySwitchOrNot?: boolean;
  /**
   * @remarks
   * The name of the Logstore for the threat analysis feature on the user side. The value is in the cloud_siem format.
   * 
   * @example
   * cloud-siem
   */
  logStoreName?: string;
  /**
   * @remarks
   * The cloud services.
   */
  productList?: ListDeliveryResponseBodyDataProductList[];
  /**
   * @remarks
   * The name of the project for the threat analysis feature in Simple Log service on the user side. The value is in the aliyun-cloudsiem-data-${aliUid}-${region} format.
   * 
   * @example
   * aliyun-cloudsiem-data-127608589417****-cn-shanghai
   */
  projectName?: string;
  /**
   * @remarks
   * The URL that is used for log analysis.
   * 
   * @example
   * https://sls4service.console.aliyun.com/lognext/project/aliyun-cloudsiem-data-127608589417****-cn-shanghai
   * /logsearch/cloud-siem?isShare=true&hideTopbar=true&hideSidebar=true&ignoreTabLocalStorage=true
   */
  searchUrl?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardUrl: 'DashboardUrl',
      displaySwitchOrNot: 'DisplaySwitchOrNot',
      logStoreName: 'LogStoreName',
      productList: 'ProductList',
      projectName: 'ProjectName',
      searchUrl: 'SearchUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardUrl: 'string',
      displaySwitchOrNot: 'boolean',
      logStoreName: 'string',
      productList: { 'type': 'array', 'itemType': ListDeliveryResponseBodyDataProductList },
      projectName: 'string',
      searchUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productList)) {
      $dara.Model.validateArray(this.productList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListDeliveryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-58D4-55B2-87B9-74D413F7****
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
      data: ListDeliveryResponseBodyData,
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

