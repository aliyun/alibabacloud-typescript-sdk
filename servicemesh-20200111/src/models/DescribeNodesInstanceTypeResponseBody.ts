// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodesInstanceTypeResponseBodyInstanceTypes extends $dara.Model {
  /**
   * @remarks
   * The label keys of nodes which have MultiBuffer optimization supported. (Enable optimization only if pod being scheduled to node which have a label key specified by this field and its value equals with the value field)
   * 
   * @example
   * feature.node.kubernetes.io/mb-feature-enable
   */
  key?: string;
  /**
   * @remarks
   * Indicates whether the instance type supports Multi-Buffer acceleration. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  multiBufferEnabled?: boolean;
  /**
   * @remarks
   * The instance type of the node.
   * 
   * @example
   * ecs.g7.xlarge
   */
  nodeType?: string;
  /**
   * @remarks
   * The label keys of nodes which have MultiBuffer optimization supported. (Enable optimization only if pod being scheduled to node which have a label key specified by the key field and its value equals with this field)
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      multiBufferEnabled: 'MultiBufferEnabled',
      nodeType: 'NodeType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      multiBufferEnabled: 'boolean',
      nodeType: 'string',
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

export class DescribeNodesInstanceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance types of the nodes.
   */
  instanceTypes?: DescribeNodesInstanceTypeResponseBodyInstanceTypes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': DescribeNodesInstanceTypeResponseBodyInstanceTypes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

