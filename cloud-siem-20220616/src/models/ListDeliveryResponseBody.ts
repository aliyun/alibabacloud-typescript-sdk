// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataProductListLogMapValue } from "./DataProductListLogMapValue";


export class ListDeliveryResponseBodyDataProductListLogListExtraParameters extends $dara.Model {
  /**
   * @remarks
   * The key of the additional parameter.
   * 
   * @example
   * flag
   */
  key?: string;
  /**
   * @remarks
   * The value of the additional parameter.
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
   * Indicates whether the log delivery switch can be operated. Only the delegated administrator for threat analysis can operate the switch. Valid values:
   * 
   * - true: The switch can be operated.
   * 
   * - false: The switch cannot be operated.
   * 
   * @example
   * true
   */
  canOperateOrNot?: boolean;
  /**
   * @remarks
   * Additional parameters.
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
   * This parameter is deprecated. You can ignore it.
   * 
   * @example
   * audit log
   */
  logName?: string;
  /**
   * @remarks
   * This parameter is deprecated. You can ignore it.
   * 
   * @example
   * audit log
   */
  logNameEn?: string;
  /**
   * @remarks
   * The language key of the log name. This key is used to display the log name in different languages.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_crack_from_beaver}
   */
  logNameKey?: string;
  /**
   * @remarks
   * The log delivery status. Valid values:
   * 
   * - true: Delivery is in progress.
   * 
   * - false: Delivery is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The topic of the log in the LogStore. This parameter is an index field in the LogStore and is used to differentiate logs.
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
   * A list of logs for cloud products that do not have subcategories.
   */
  logList?: ListDeliveryResponseBodyDataProductListLogList[];
  /**
   * @remarks
   * A list of logs that are categorized. For example, Security Center logs are categorized into groups such as Host and Network. The group is the key, and the logs in the group are the value.
   */
  logMap?: { [key: string]: DataProductListLogMapValue[] };
  /**
   * @remarks
   * The code of the cloud product. Valid values:
   * 
   * - qcloud_waf
   * 
   * - qcloud_cfw
   * 
   * - hcloud_waf
   * 
   * - hcloud_cfw
   * 
   * - ddos
   * 
   * - sas
   * 
   * - cfw
   * 
   * - config
   * 
   * - csk
   * 
   * - fc
   * 
   * - rds
   * 
   * - nas
   * 
   * - apigateway
   * 
   * - cdn
   * 
   * - mongodb
   * 
   * - eip
   * 
   * - slb
   * 
   * - vpc
   * 
   * - actiontrail
   * 
   * - waf
   * 
   * - bastionhost
   * 
   * - oss
   * 
   * - polardb
   * 
   * @example
   * sas
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is deprecated. You can ignore it.
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
   * The URL of the dashboard on the log analysis page.
   * 
   * @example
   * https://sls4service.console.aliyun.com/lognext/project/aliyun-cloudsiem-data-127608589417****-cn-shanghai
   * /dashboard/cloud-siem?isShare=true&hideTopbar=true&hideSidebar=true&ignoreTabLocalStorage=true
   */
  dashboardUrl?: string;
  /**
   * @remarks
   * Indicates whether to display the delivery switch. The default value is true. Valid values:
   * 
   * - true: The delivery switch is displayed.
   * 
   * - false: The delivery switch is hidden.
   * 
   * @example
   * true
   */
  displaySwitchOrNot?: boolean;
  /**
   * @remarks
   * The name of your LogStore for threat analysis. The format is \\`cloud_siem\\`.
   * 
   * @example
   * cloud-siem
   */
  logStoreName?: string;
  /**
   * @remarks
   * A list of products.
   */
  productList?: ListDeliveryResponseBodyDataProductList[];
  /**
   * @remarks
   * The name of your Simple Log Service (SLS) project for threat analysis. The format is \\`aliyun-cloudsiem-data-${aliUid}-${region}\\`.
   * 
   * @example
   * aliyun-cloudsiem-data-127608589417****-cn-shanghai
   */
  projectName?: string;
  /**
   * @remarks
   * The URL of the Search & Analysis page in the SLS console.
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
   * The returned data.
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

