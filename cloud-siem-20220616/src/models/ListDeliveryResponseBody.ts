// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataProductListLogMapValue } from "./DataProductListLogMapValue";


export class ListDeliveryResponseBodyDataProductListLogListExtraParameters extends $dara.Model {
  /**
   * @remarks
   * The identifier of the extended parameter.
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
   * Specifies whether the log delivery switch can be operated. Only the delegated administrator of Threat Analysis can operate the log delivery switch. Valid values:
   * - true: The switch can be operated.
   * - false: The switch cannot be operated.
   * 
   * @example
   * true
   */
  canOperateOrNot?: boolean;
  /**
   * @remarks
   * The extended parameters.
   */
  extraParameters?: ListDeliveryResponseBodyDataProductListLogListExtraParameters[];
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_config_log
   */
  logCode?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and can be ignored.
   * 
   * @example
   * audit log
   */
  logName?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and can be ignored.
   * 
   * @example
   * audit log
   */
  logNameEn?: string;
  /**
   * @remarks
   * The language code of the log, which is used to display multilingual names.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_crack_from_beaver}
   */
  logNameKey?: string;
  /**
   * @remarks
   * The log delivery status. Valid values:
   * - true: Delivery is in progress.  
   * - false: Delivery is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The topic of the log in the Logstore. It is an index field of the Logstore and can be used to distinguish different logs.
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
   * The cloud services that do not have finer categories.
   */
  logList?: ListDeliveryResponseBodyDataProductListLogList[];
  /**
   * @remarks
   * The list of logs that have categories. For example, Security Center has groups such as host and network. The group information is the key, and the logs included in the group are the value.
   * 
   * @example
   * {"key":[{"LogCode":"cloud_siem_config_log","LogName":"audit log","LogNameEn":"audit log","LogNameKey":"${sas.cloudsiem.prod.cloud_siem_aegis_crack_from_beaver}","Status":true,"CanOperateOrNot":true,"Topic":"sas_login_event","ExtraParameters":[{"Key":"flag","Value":"value"}]}]}
   */
  logMap?: { [key: string]: DataProductListLogMapValue[] };
  /**
   * @remarks
   * The code of the cloud service. Valid values:
   * - qcloud_waf
   * - qlcoud_cfw
   * - hcloud_waf
   * - hcloud_cfw
   * - ddos
   * - sas
   * - cfw
   * - config
   * - csk
   * - fc
   * - rds
   * - nas
   * - apigateway
   * - cdn
   * - mongodb
   * - eip
   * - slb
   * - vpc
   * - actiontrail
   * - waf
   * - bastionhost
   * - oss
   * - polardb
   * 
   * @example
   * sas
   */
  productCode?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and can be ignored.
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
   * The URL for dashboard display on the log analysis page.
   * 
   * @example
   * https://sls4service.console.aliyun.com/lognext/project/aliyun-cloudsiem-data-127608589417****-cn-shanghai
   * /dashboard/cloud-siem?isShare=true&hideTopbar=true&hideSidebar=true&ignoreTabLocalStorage=true
   */
  dashboardUrl?: string;
  /**
   * @remarks
   * Specifies whether to display the delivery switch. Default value: true. Valid values:
   * - true: Display the delivery switch.
   * - false: Hide the delivery switch.
   * 
   * @example
   * true
   */
  displaySwitchOrNot?: boolean;
  /**
   * @remarks
   * The name of the Logstore on the user side of Threat Analysis. Format: cloud_siem.
   * 
   * @example
   * cloud-siem
   */
  logStoreName?: string;
  /**
   * @remarks
   * The list of products.
   */
  productList?: ListDeliveryResponseBodyDataProductList[];
  /**
   * @remarks
   * The name of the Log Service project on the user side of Threat Analysis. Format: aliyun-cloudsiem-data-${aliUid}-${region}.
   * 
   * @example
   * aliyun-cloudsiem-data-127608589417****-cn-shanghai
   */
  projectName?: string;
  /**
   * @remarks
   * The URL for query and analysis on the log analysis page.
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
   * The detailed response data.
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

