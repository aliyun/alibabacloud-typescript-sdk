// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformEipSegmentToPublicIpAddressPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the IP address pool.
   * 
   * @example
   * pippool-6wetvn6fumkgycssx****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IP address pool belongs.
   * 
   * @example
   * rg-acfmxazb4pcdvf****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddressPoolId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

