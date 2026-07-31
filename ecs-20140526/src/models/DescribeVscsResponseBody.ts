// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscsResponseBodyVscsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the key pair.
   * 
   * @example
   * name
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 15
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVscsResponseBodyVscs extends $dara.Model {
  /**
   * @remarks
   * The description of the port list.
   * 
   * @example
   * ali***-post-cn-j4g45iqze00f
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-uf69***21l8zuoizdq
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource group ID. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * >Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-aek2zex4ehdyjvq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the VSC. Valid values:
   * 
   * - In_use: in use.
   * - Attaching: being attached.
   * - Detaching: being detached.
   * - AttachFailed: failed to attach.
   * - DetachFailed: failed to detach.
   * 
   * @example
   * In_use
   */
  status?: string;
  /**
   * @remarks
   * The tag keys of snapshots in the snapshot-consistent group. The default values of Key and Value provide the snapshot source information.
   */
  tags?: DescribeVscsResponseBodyVscsTags[];
  /**
   * @remarks
   * VSC ID。
   * 
   * @example
   * vsc-hp34ue**g0wmycb27bwal
   */
  vscId?: string;
  /**
   * @remarks
   * The custom name of the VSC.
   * 
   * @example
   * test-vsc
   */
  vscName?: string;
  /**
   * @remarks
   * The type of the VSC. Valid values: Primary or Secondary.
   * 
   * @example
   * Primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vscId: 'VscId',
      vscName: 'VscName',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeVscsResponseBodyVscsTags },
      vscId: 'string',
      vscName: 'string',
      vscType: 'string',
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

export class DescribeVscsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token. The value is the NextToken parameter value returned by the previous API call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-**-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * VSC
   */
  vscs?: DescribeVscsResponseBodyVscs[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      vscs: 'Vscs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      vscs: { 'type': 'array', 'itemType': DescribeVscsResponseBodyVscs },
    };
  }

  validate() {
    if(Array.isArray(this.vscs)) {
      $dara.Model.validateArray(this.vscs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

