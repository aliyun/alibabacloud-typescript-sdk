// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableServiceAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The type of service address. Valid values:
   * 
   * *   **ProbeTask**: probes the source IP address.
   * *   **RemoteWeb**: probes the IP address for remote logon.
   * 
   * > If you do not specify a value, all service IP addresses are queried.
   * 
   * @example
   * ProbeTask
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-****
   */
  sagId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sag****
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

