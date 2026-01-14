// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomRoutingEndpointGroupDestinationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * @example
   * epg-bp16jdc00bhe97sr5****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The start port of the backend service port range of the endpoint group.
   * 
   * Valid values: **1** to **65499**. The **FromPort** value must be smaller than or equal to the **ToPort** value.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The backend service protocols of the endpoint group. Valid values:
   * 
   * - **TCP**: TCP.
   * - **UDP**: UDP.
   * - **TCP,UDP**: TCP and UDP.
   * 
   * If this parameter is empty, all types of protocols are queried.
   * 
   * You can specify up to 10 protocols.
   */
  protocols?: string[];
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The end port of the backend service port range of the endpoint group.
   * 
   * Valid values: **1** to **65499**. The **FromPort** value must be smaller than or equal to the **ToPort** value.
   * 
   * @example
   * 80
   */
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpointGroupId: 'EndpointGroupId',
      fromPort: 'FromPort',
      listenerId: 'ListenerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocols: 'Protocols',
      regionId: 'RegionId',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpointGroupId: 'string',
      fromPort: 'number',
      listenerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      toPort: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

