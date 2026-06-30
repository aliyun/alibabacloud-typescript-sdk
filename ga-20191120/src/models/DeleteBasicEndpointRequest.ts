// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBasicEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Set this parameter to a value that is generated from your client to make sure that the value is unique among different requests. The ClientToken value supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** value as the **ClientToken** value. The **RequestId** value is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the endpoint group to which the endpoint that you want to delete belongs. You can call the [ListBasicEndpointGroups](~~~~) operation to query the endpoint group ID of a basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the endpoint that you want to delete from the basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-bp14sz7ftcwwjgrdm****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the Global Accelerator instance. Set the value to **ap-southeast-1**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointGroupId: 'string',
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

