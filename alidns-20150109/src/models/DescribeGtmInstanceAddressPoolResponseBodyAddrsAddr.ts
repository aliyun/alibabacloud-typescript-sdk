// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr extends $dara.Model {
  /**
   * @remarks
   * The ID of the address.
   * 
   * @example
   * 123
   */
  addrId?: number;
  /**
   * @remarks
   * Indicates whether health check was enabled for the address. Valid values:
   * 
   * *   **OK**: Normal
   * *   **ALERT**: Alert
   * 
   * @example
   * OK
   */
  alertStatus?: string;
  /**
   * @remarks
   * The time when the address pool was created.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  createTime?: string;
  /**
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
   * *   **SMART**: Intelligent return
   * *   **ONLINE**: Always online
   * *   **OFFLINE**: Always offline
   * 
   * @example
   * SMART
   */
  mode?: string;
  /**
   * @remarks
   * The last time when the address was updated.
   * 
   * @example
   * 2017-12-28T13:08Z
   */
  updateTime?: string;
  /**
   * @remarks
   * A timestamp that indicates the last time when the address was updated.
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 1.1.1.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      addrId: 'AddrId',
      alertStatus: 'AlertStatus',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrId: 'number',
      alertStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      lbaWeight: 'number',
      mode: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
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

