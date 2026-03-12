// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The instance description.
   */
  instanceDesc?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2zep6e5u6l2yu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      instanceDesc: 'InstanceDesc',
      instanceId: 'InstanceId',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      instanceDesc: 'string',
      instanceId: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instances included in the inspection configuration.
   */
  instances?: GetScheduledInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The response message.
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that are returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': GetScheduledInstancesResponseBodyInstances },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

