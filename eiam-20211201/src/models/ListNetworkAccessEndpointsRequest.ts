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
   * The number of entries to return on each page. The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The status of the network endpoint. Valid values:
   * 
   * - pending: The endpoint is pending initialization.
   * 
   * - creating: The endpoint is being created.
   * 
   * - running: The endpoint is running.
   * 
   * - deleting: The endpoint is being deleted.
   * 
   * This parameter does not take effect when NetworkAccessEndpointType is set to shared.
   * 
   * @example
   * running
   */
  networkAccessEndpointStatus?: string;
  /**
   * @remarks
   * The type of the network endpoint. Valid values:
   * 
   * - shared: a shared network endpoint.
   * 
   * - private: a private network endpoint.
   * 
   * The default value is private.
   * 
   * @example
   * private
   */
  networkAccessEndpointType?: string;
  /**
   * @remarks
   * The token used for the next query. Set this parameter to the NextToken value returned from the previous API call. Leave this parameter empty for the first query.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the VPC to which the private network endpoint is connected. This parameter does not take effect when NetworkAccessEndpointType is set to shared.
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The region ID of the VPC to which the private network endpoint is connected. The value of this parameter must be a region returned by the ListNetworkAccessEndpointAvailableRegions operation. This parameter does not take effect when NetworkAccessEndpointType is set to shared.
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

