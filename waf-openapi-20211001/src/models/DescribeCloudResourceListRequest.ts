// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceListRequest extends $dara.Model {
  /**
   * @example
   * i-8vbdlsd********81e22-80-ecs
   */
  cloudResourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @example
   * 1111111111
   */
  ownerUserId?: string;
  /**
   * @example
   * 80
   */
  port?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * i-8vbdlsd********81e22
   */
  resourceInstanceId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * ecs
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResourceId: 'CloudResourceId',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerUserId: 'OwnerUserId',
      port: 'Port',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceId: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerUserId: 'string',
      port: 'string',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceProduct: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

