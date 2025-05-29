// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 2018-12-10T21:00:00Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  groupName?: string;
  /**
   * @example
   * 33763****77224964-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 2117*****0447
   */
  orderId?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * 12345*****67890
   */
  registerCode?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * dome
   */
  subType?: string;
  /**
   * @example
   * ipc
   */
  type?: string;
  /**
   * @example
   * 8yd*****qem
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      name: 'Name',
      orderId: 'OrderId',
      region: 'Region',
      registerCode: 'RegisterCode',
      requestId: 'RequestId',
      subType: 'SubType',
      type: 'Type',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      id: 'string',
      name: 'string',
      orderId: 'string',
      region: 'string',
      registerCode: 'string',
      requestId: 'string',
      subType: 'string',
      type: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

