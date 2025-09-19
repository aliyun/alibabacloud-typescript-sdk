// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRiskLevelsResponseBodyInstanceRiskLevels extends $dara.Model {
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-m5efigezp50l2cmb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * *   **none**
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The UUID of the server for which you want to modify the defense rule. You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to query the UUIDs of servers.
   * 
   * @example
   * f2d6e901-1004-4ca8-9dae-53ec04a92765
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      level: 'Level',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      level: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRiskLevelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The risk levels of instances.
   */
  instanceRiskLevels?: ListInstanceRiskLevelsResponseBodyInstanceRiskLevels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5CF78A7-30AA-59DB-847F-13EE3AE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceRiskLevels: 'InstanceRiskLevels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRiskLevels: { 'type': 'array', 'itemType': ListInstanceRiskLevelsResponseBodyInstanceRiskLevels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceRiskLevels)) {
      $dara.Model.validateArray(this.instanceRiskLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

