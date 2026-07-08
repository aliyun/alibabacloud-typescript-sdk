// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Device creation time.
   * 
   * @example
   * 2018-12-10T21:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Device description.
   * 
   * @example
   * xxx路口摄像头
   */
  description?: string;
  /**
   * @remarks
   * Space ID.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * Space name.
   * 
   * @example
   * 测试空间
   */
  groupName?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * 33763****77224964-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Device name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Order ID.
   * 
   * @example
   * 2117*****0447
   */
  orderId?: string;
  /**
   * @remarks
   * Region where the space belongs, also known as the service center.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * Device registration code.
   * 
   * @example
   * 12345*****67890
   */
  registerCode?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Device child type. Valid values:
   * 
   * - bullet (bullet camera)
   * 
   * - dome (dome camera)
   * 
   * - ptz (PTZ)
   * 
   * @example
   * dome
   */
  subType?: string;
  /**
   * @remarks
   * Device type. Valid values:
   * 
   * - ipc (camera)
   * 
   * - platform
   * 
   * - ied (intelligent device)
   * 
   * @example
   * ipc
   */
  type?: string;
  /**
   * @remarks
   * Device vendor.
   * 
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

