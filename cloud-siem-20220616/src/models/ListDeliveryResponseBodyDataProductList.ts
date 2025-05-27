// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeliveryResponseBodyDataProductListLogList } from "./ListDeliveryResponseBodyDataProductListLogList";
import { DataProductListLogMapValue } from "./DataProductListLogMapValue";


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

