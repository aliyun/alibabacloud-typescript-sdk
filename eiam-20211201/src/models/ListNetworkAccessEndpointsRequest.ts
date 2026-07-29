// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkAccessEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The status of the network access endpoint. Valid values:
   *  
   * - pending: Pending initialization.
   * - creating: Being created.
   * - running: Running.
   * - deleting: Being deleted.
   * 
   * This parameter does not take effect when NetworkAccessEndpointType is set to shared.
   * 
   * @example
   * running
   */
  networkAccessEndpointStatus?: string;
  /**
   * @remarks
   * The type of the network access endpoint. Valid values:
   * 
   * - shared: shared network access endpoint.
   * - private: dedicated network access endpoint.
   * 
   * Default value: private.
   * 
   * @example
   * private
   */
  networkAccessEndpointType?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call. Leave this parameter empty for the first query.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The VPC ID of the dedicated network access endpoint. This parameter does not take effect when NetworkAccessEndpointType is set to shared.
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The region of the VPC for the dedicated network access endpoint. The region must be one of the regions returned by the ListNetworkAccessEndpointAvailableRegions operation. This parameter does not take effect when NetworkAccessEndpointType is set to shared.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      networkAccessEndpointStatus: 'NetworkAccessEndpointStatus',
      networkAccessEndpointType: 'NetworkAccessEndpointType',
      nextToken: 'NextToken',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      networkAccessEndpointStatus: 'string',
      networkAccessEndpointType: 'string',
      nextToken: 'string',
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

