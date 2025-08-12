// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupInstancesResponseBodyResourcesResource extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the service name.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-2ze3w55tr2r****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * hostIP
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      id: 'number',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponseBodyResources extends $dara.Model {
  resource?: DescribeMonitorGroupInstancesResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupInstancesResponseBodyResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 97F2A410-9412-499C-9AD1-76EF7EC02DF2
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resources in the application group.
   */
  resources?: DescribeMonitorGroupInstancesResponseBodyResources;
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
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: DescribeMonitorGroupInstancesResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

