// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableServiceAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the service address for the Smart Access Gateway instance. Valid values:
   * 
   * - **ProbeTask**: the source IP address for network probes.
   * 
   * - **RemoteWeb**: the IP address for remote logon.
   * 
   * > If you do not specify this parameter, all types of service addresses are queried.
   * 
   * @example
   * ProbeTask
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the region where the Smart Access Gateway instance is deployed.
   * 
   * Call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Smart Access Gateway instance.
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

