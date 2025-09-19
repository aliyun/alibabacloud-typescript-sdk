// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTargetListByBatchRequestOperationList extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group.
   * 
   * >  You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of server groups.
   * 
   * @example
   * 11883086
   */
  groupId?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   **add**: the add operation.
   * *   **del**: the remove operation.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * @example
   * de393767-6fe1-4a8d-837d-927a2b******
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the VPC-connected instance.
   * 
   * @example
   * vpc-bp1ow0rm9t92iza******
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      operation: 'Operation',
      uuid: 'Uuid',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      operation: 'string',
      uuid: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTargetListByBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the release batch.
   * 
   * This parameter is required.
   * 
   * @example
   * 52370
   */
  batchId?: number;
  /**
   * @remarks
   * The operations on assets.
   * 
   * This parameter is required.
   */
  operationList?: UpdateTargetListByBatchRequestOperationList[];
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      operationList: 'OperationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      operationList: { 'type': 'array', 'itemType': UpdateTargetListByBatchRequestOperationList },
    };
  }

  validate() {
    if(Array.isArray(this.operationList)) {
      $dara.Model.validateArray(this.operationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

