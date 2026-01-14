// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomRoutingPortMappingsByDestinationRequest extends $dara.Model {
  /**
   * @remarks
   * The service IP address of the backend instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.XX.XX
   */
  destinationAddress?: string;
  /**
   * @remarks
   * The ID of the endpoint to which the backend instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-bp16jdc00bhe97sr5****
   */
  endpointId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      destinationAddress: 'DestinationAddress',
      endpointId: 'EndpointId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationAddress: 'string',
      endpointId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

