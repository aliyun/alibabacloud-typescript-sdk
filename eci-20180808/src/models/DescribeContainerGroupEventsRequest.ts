// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupEventsRequestTag } from "./DescribeContainerGroupEventsRequestTag";


export class DescribeContainerGroupEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the elastic container instances. You can specify up to 20 IDs. Each ID must be a JSON string.
   * 
   * @example
   * ["eci-bp17gw49eu09yiwm****", "eci-bp19aq49du01abcm****", "eci-2zegym1qhbmdfr1s****"]
   */
  containerGroupIds?: string;
  /**
   * @remarks
   * The event source. Valid values:
   * 
   * *   EciService
   * *   K8sAgent
   * 
   * This parameter is empty by default. This indicates that all events are queried.
   * 
   * @example
   * K8sAgent
   */
  eventSource?: string;
  /**
   * @remarks
   * The maximum number of elastic container instances to be returned for this request. Default value: 200.
   * 
   * >  The number of elastic container instances to be returned is no greater than this parameter value.
   * 
   * @example
   * 200
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * d78f2dd8-5979-42fe-xaee-b16db43be5bc
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-uf66jeqopgqa9hdn****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * A relative time in seconds before the current time from which to show event information. This parameter is used to poll incremental events.
   * 
   * @example
   * 60
   */
  sinceSecond?: number;
  /**
   * @remarks
   * The tag that is added to the elastic container instances.
   */
  tag?: DescribeContainerGroupEventsRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupIds: 'ContainerGroupIds',
      eventSource: 'EventSource',
      limit: 'Limit',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sinceSecond: 'SinceSecond',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupIds: 'string',
      eventSource: 'string',
      limit: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sinceSecond: 'number',
      tag: { 'type': 'array', 'itemType': DescribeContainerGroupEventsRequestTag },
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

