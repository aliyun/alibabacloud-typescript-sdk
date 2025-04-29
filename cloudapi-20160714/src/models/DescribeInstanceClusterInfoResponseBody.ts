// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceClusterInfoResponseBodyInstanceClusterAttribute } from "./DescribeInstanceClusterInfoResponseBodyInstanceClusterAttribute";
import { DescribeInstanceClusterInfoResponseBodyInstanceList } from "./DescribeInstanceClusterInfoResponseBodyInstanceList";


export class DescribeInstanceClusterInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2022-10-10T18:29:27
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster description, which can be up to 200 characters in length.
   * 
   * @example
   * v0.0.4
   */
  description?: string;
  /**
   * @remarks
   * The cluster details.
   */
  instanceClusterAttribute?: DescribeInstanceClusterInfoResponseBodyInstanceClusterAttribute;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * apigateway-ht-04e41d95e9c1
   */
  instanceClusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test
   */
  instanceClusterName?: string;
  /**
   * @remarks
   * The cluster status.
   * 
   * @example
   * RUNNING
   */
  instanceClusterStatus?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * normal
   */
  instanceClusterType?: string;
  /**
   * @remarks
   * The cluster version.
   * 
   * @example
   * 3.5.3.856
   */
  instanceClusterVersion?: string;
  /**
   * @remarks
   * The dedicated instances contained in the cluster.
   */
  instanceList?: DescribeInstanceClusterInfoResponseBodyInstanceList;
  /**
   * @remarks
   * The time when the cluster was last modified.
   * 
   * @example
   * 2023-06-19 10:40:29 +0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      instanceClusterAttribute: 'InstanceClusterAttribute',
      instanceClusterId: 'InstanceClusterId',
      instanceClusterName: 'InstanceClusterName',
      instanceClusterStatus: 'InstanceClusterStatus',
      instanceClusterType: 'InstanceClusterType',
      instanceClusterVersion: 'InstanceClusterVersion',
      instanceList: 'InstanceList',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      instanceClusterAttribute: DescribeInstanceClusterInfoResponseBodyInstanceClusterAttribute,
      instanceClusterId: 'string',
      instanceClusterName: 'string',
      instanceClusterStatus: 'string',
      instanceClusterType: 'string',
      instanceClusterVersion: 'string',
      instanceList: DescribeInstanceClusterInfoResponseBodyInstanceList,
      modifiedTime: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceClusterAttribute && typeof (this.instanceClusterAttribute as any).validate === 'function') {
      (this.instanceClusterAttribute as any).validate();
    }
    if(this.instanceList && typeof (this.instanceList as any).validate === 'function') {
      (this.instanceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

