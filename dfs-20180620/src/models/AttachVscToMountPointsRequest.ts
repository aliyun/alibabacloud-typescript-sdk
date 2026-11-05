// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AttachVscToMountPointsRequestAttachInfos extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the ECS instance to which the HDFS file system is mounted.
   * 
   * @example
   * i-2zehyz70ednszl6rrfj6
   */
  instanceId?: string;
  /**
   * @remarks
   * The mount point ID.
   * 
   * @example
   * f-cfea9ae2ref87.cn-zhangjiakou.dfs.aliyuncs.com
   */
  mountPointId?: string;
  /**
   * @remarks
   * The VSC ID. You must specify either InstanceId or VscId, but not both.
   * 
   * @example
   * vsc-bp19yqmujug2r762cnabal
   */
  vscId?: string;
  /**
   * @remarks
   * The custom name of the VSC.
   * 
   * @example
   * xc
   */
  vscName?: string;
  /**
   * @remarks
   * The VSC type. Valid values:
   * - Primary (default): the reserved default VSC on an ECS instance.
   * - Secondary: a repeatable VSC on an ECS instance.
   * 
   * @example
   * Primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mountPointId: 'MountPointId',
      vscId: 'VscId',
      vscName: 'VscName',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mountPointId: 'string',
      vscId: 'string',
      vscName: 'string',
      vscType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVscToMountPointsRequest extends $dara.Model {
  /**
   * @remarks
   * The mount information list.
   */
  attachInfos?: AttachVscToMountPointsRequestAttachInfos[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * Specifies whether to use an assumed role to check the permissions of the compute node. Valid values:
   * - true: Yes.
   * - false (default): No.
   * 
   * @example
   * false
   */
  useAssumeRoleChkServerPerm?: boolean;
  static names(): { [key: string]: string } {
    return {
      attachInfos: 'AttachInfos',
      inputRegionId: 'InputRegionId',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInfos: { 'type': 'array', 'itemType': AttachVscToMountPointsRequestAttachInfos },
      inputRegionId: 'string',
      useAssumeRoleChkServerPerm: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.attachInfos)) {
      $dara.Model.validateArray(this.attachInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

