// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr extends $dara.Model {
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 1.1.1.1
   */
  addr?: string;
  /**
   * @remarks
   * The status of the last health check on the address. Valid values:
   * 
   * *   OK: No active alerts are triggered.
   * *   ALERT: Alerts are triggered based on the alert rules.
   * 
   * @example
   * ok
   */
  alertStatus?: string;
  /**
   * @remarks
   * The source region of the address.
   * 
   * *   lineCode: the line code of the source region of the address. This parameter is deprecated, and lineCodes prevails.
   * *   lineName: the line name of the source region of the address. This parameter is deprecated.
   * *   lineCodes: the line codes of the source regions of the address.
   * 
   * @example
   * "lineCode":"aliyun_r_cn-zhangjiakou", "lineName": "Alibaba Cloud_China (Zhangjiakou)", "lineCodes": ["aliyun_r_cn-zhangjiakou"]
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The time when the address was added into the address pool.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the address was added into the address pool.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The weight of the address.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The mode of the address. Valid values:
   * 
   * *   SMART: smart return
   * *   ONLINE: always online
   * *   OFFLINE: always offline
   * 
   * @example
   * online
   */
  mode?: string;
  /**
   * @remarks
   * The description of the address.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The time when the address was last updated.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the address was last updated.
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      alertStatus: 'AlertStatus',
      attributeInfo: 'AttributeInfo',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      remark: 'Remark',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      alertStatus: 'string',
      attributeInfo: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      lbaWeight: 'number',
      mode: 'string',
      remark: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

