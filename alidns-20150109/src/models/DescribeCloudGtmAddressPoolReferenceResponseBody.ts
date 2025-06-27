// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmAddressPoolReferenceResponseBodyInstanceConfigs } from "./DescribeCloudGtmAddressPoolReferenceResponseBodyInstanceConfigs";


export class DescribeCloudGtmAddressPoolReferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool. This ID uniquely identifies the address pool.
   * 
   * @example
   * pool-89528023225442**16
   */
  addressPoolId?: string;
  /**
   * @remarks
   * Address pool name.
   * 
   * @example
   * app
   */
  addressPoolName?: string;
  /**
   * @remarks
   * The access domain names that reference the address pool.
   */
  instanceConfigs?: DescribeCloudGtmAddressPoolReferenceResponseBodyInstanceConfigs;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 853805EA-3D47-47D5-9A1A-A45C24313ABD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addressPoolId: 'AddressPoolId',
      addressPoolName: 'AddressPoolName',
      instanceConfigs: 'InstanceConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolId: 'string',
      addressPoolName: 'string',
      instanceConfigs: DescribeCloudGtmAddressPoolReferenceResponseBodyInstanceConfigs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceConfigs && typeof (this.instanceConfigs as any).validate === 'function') {
      (this.instanceConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

