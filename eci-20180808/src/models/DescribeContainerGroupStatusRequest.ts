// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupStatusRequestTag } from "./DescribeContainerGroupStatusRequestTag";


export class DescribeContainerGroupStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances. You can specify up to 20 IDs. Each ID must be a string in the JSON format.
   * 
   * @example
   * ["eci-bp17gw49eu09yiwm****", "eci-bp19aq49du01abcm****", "eci-2zegym1qhbmdfr1s****"]
   */
  containerGroupIds?: string;
  /**
   * @remarks
   * Specifies the maximum number of elastic container instances to be returned for this request. Default value: 200.
   * 
   * > The number of returned resources can be less than or equal to the value of this parameter.
   * 
   * @example
   * 200
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.\\
   * You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * d78f2dd8-5979-42fe-xaee-b16db43be5bc
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the instances.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instances belong.
   * 
   * @example
   * rg-uf66jeqopgqa9hdn****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * A relative time in seconds before the current time from which to show elastic container instances whose status changes. This parameter is used to poll status of elastic container instances.
   * 
   * @example
   * 60
   */
  sinceSecond?: number;
  /**
   * @remarks
   * The tag that is bound to the instances.
   */
  tag?: DescribeContainerGroupStatusRequestTag[];
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
   * The zone ID of the instances.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupIds: 'ContainerGroupIds',
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
      limit: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sinceSecond: 'number',
      tag: { 'type': 'array', 'itemType': DescribeContainerGroupStatusRequestTag },
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

