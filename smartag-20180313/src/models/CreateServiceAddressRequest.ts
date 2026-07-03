// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The service address of the Smart Access Gateway instance. Example: **192.168.1.1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.1
   */
  address?: string;
  /**
   * @remarks
   * The service address type of the Smart Access Gateway instance. Set the value to **ProbeTask**.
   * 
   * This parameter is required.
   * 
   * @example
   * ProbeTask
   */
  addressType?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-****
   */
  sagId?: string;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
   * 
   * This parameter is required.
   * 
   * @example
   * sag****
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

