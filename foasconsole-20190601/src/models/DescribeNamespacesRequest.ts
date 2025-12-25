// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespacesRequestDescribeNamespacesRequestTags extends $dara.Model {
  /**
   * @example
   * flink
   */
  key?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesRequestDescribeNamespacesRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223493C7-FCA9-13D4-B75B-AF8B32F4****
   */
  instanceId?: string;
  /**
   * @example
   * ns-1
   */
  namespace?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  tags?: DescribeNamespacesRequestDescribeNamespacesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      region: 'Region',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      instanceId: 'string',
      namespace: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      region: 'string',
      tags: { 'type': 'array', 'itemType': DescribeNamespacesRequestDescribeNamespacesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  describeNamespacesRequest?: DescribeNamespacesRequestDescribeNamespacesRequest;
  static names(): { [key: string]: string } {
    return {
      describeNamespacesRequest: 'DescribeNamespacesRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeNamespacesRequest: DescribeNamespacesRequestDescribeNamespacesRequest,
    };
  }

  validate() {
    if(this.describeNamespacesRequest && typeof (this.describeNamespacesRequest as any).validate === 'function') {
      (this.describeNamespacesRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

