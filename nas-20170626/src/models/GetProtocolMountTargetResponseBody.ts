// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProtocolMountTargetResponseBodyProtocolMountTarget extends $dara.Model {
  /**
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @example
   * 2025-12-22 17:49:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * exp-19abf5beab8d****
   */
  exportId?: string;
  /**
   * @remarks
   * Fileset ID。
   * 
   * @example
   * fset-299b4ca04de8****
   */
  fsetId?: string;
  /**
   * @example
   * /
   */
  path?: string;
  /**
   * @example
   * cpfs-0229cb80bcc0****-x******.cn-*****.cpfs.aliyuncs.com
   */
  protocolMountTargetDomain?: string;
  /**
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @example
   * vsw-8vb2qjnxs6hiobzve****
   */
  vSwitchId?: string;
  vSwitchIds?: string[];
  /**
   * @example
   * vpc-bp1h5mxoqfuo3xurf****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      createTime: 'CreateTime',
      description: 'Description',
      exportId: 'ExportId',
      fsetId: 'FsetId',
      path: 'Path',
      protocolMountTargetDomain: 'ProtocolMountTargetDomain',
      protocolType: 'ProtocolType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      createTime: 'string',
      description: 'string',
      exportId: 'string',
      fsetId: 'string',
      path: 'string',
      protocolMountTargetDomain: 'string',
      protocolType: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProtocolMountTargetResponseBody extends $dara.Model {
  /**
   * @example
   * M18xMA==
   */
  nextToken?: string;
  protocolMountTarget?: GetProtocolMountTargetResponseBodyProtocolMountTarget;
  /**
   * @example
   * 6299428C-3861-435D-AE54-9B330A00****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      protocolMountTarget: 'ProtocolMountTarget',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      protocolMountTarget: GetProtocolMountTargetResponseBodyProtocolMountTarget,
      requestId: 'string',
    };
  }

  validate() {
    if(this.protocolMountTarget && typeof (this.protocolMountTarget as any).validate === 'function') {
      (this.protocolMountTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

