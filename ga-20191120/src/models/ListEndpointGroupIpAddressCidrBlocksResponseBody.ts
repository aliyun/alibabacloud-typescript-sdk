// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEndpointGroupIpAddressCidrBlocksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The region ID of the endpoint group.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The CIDR blocks.
   */
  ipAddressCidrBlocks?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B6DBBB0-2D01-4C6A-A384-4129266E6B78
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the endpoint group belongs.
   * 
   * @example
   * rg-aekztkx4zwc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the endpoint group.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupRegion: 'EndpointGroupRegion',
      ipAddressCidrBlocks: 'IpAddressCidrBlocks',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupRegion: 'string',
      ipAddressCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      resourceGroupId: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddressCidrBlocks)) {
      $dara.Model.validateArray(this.ipAddressCidrBlocks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

