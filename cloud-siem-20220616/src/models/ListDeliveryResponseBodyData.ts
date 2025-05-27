// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeliveryResponseBodyDataProductList } from "./ListDeliveryResponseBodyDataProductList";


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

