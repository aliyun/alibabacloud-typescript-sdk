// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassicLinkInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance IDs. You can specify up to 100 instance IDs, separated by commas (,).
   * 
   * @example
   * i-bp1a5zr3u7nq9cxh****
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page for paging queries. Settings: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The VPC ID. The target VPC must have the enable ClassicLink feature turned on. For more information, see [Create a ClassicLink connection](https://help.aliyun.com/document_detail/65413.html).
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

