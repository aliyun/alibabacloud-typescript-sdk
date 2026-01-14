// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomRoutingEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * @example
   * epg-bp1j184jhb9i9ubwf****
   */
  endpointGroup?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-bp1dmlohjjz4kqaun****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroup: 'EndpointGroup',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroup: 'string',
      endpointId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

