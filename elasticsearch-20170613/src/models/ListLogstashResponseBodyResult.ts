// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogstashResponseBodyResultTags } from "./ListLogstashResponseBodyResultTags";
import { ListLogstashResponseBodyResultNetworkConfig } from "./ListLogstashResponseBodyResultNetworkConfig";
import { ListLogstashResponseBodyResultNodeSpec } from "./ListLogstashResponseBodyResultNodeSpec";


export class ListLogstashResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configuration information of the data node.
   */
  tags?: ListLogstashResponseBodyResultTags[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The tag value of the cloud disk.
   * 
   * @example
   * ls-cn-n6w1o5jq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type. Currently, only Virtual Private Cloud (VPC) is supported.
   */
  networkConfig?: ListLogstashResponseBodyResultNetworkConfig;
  /**
   * @remarks
   * The state of the instance. Valid values: Normal, Active, Inactive, and Invalid.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * Specifies whether to use disk encryption. Valid values:
   * 
   * *   true: Enables the concurrent query feature for queries other than aggregate queries.
   * *   false: Disables the concurrent query feature for queries other than aggregate queries.
   */
  nodeSpec?: ListLogstashResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The version of the instance. Currently, only 6.7.0_with_X-Pack and 7.4.0_with_X-Pack are supported.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The tag of the instance. Valid values:
   * 
   * @example
   * 2018-07-18T10:10:04.484Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The tag key of the cloud disk.
   * 
   * @example
   * 6.7.0_with_X-Pack
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      createdAt: 'createdAt',
      description: 'description',
      instanceId: 'instanceId',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      updatedAt: 'updatedAt',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ListLogstashResponseBodyResultTags },
      createdAt: 'string',
      description: 'string',
      instanceId: 'string',
      networkConfig: ListLogstashResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: ListLogstashResponseBodyResultNodeSpec,
      paymentType: 'string',
      resourceGroupId: 'string',
      status: 'string',
      updatedAt: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

