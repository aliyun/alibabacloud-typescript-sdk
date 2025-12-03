// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AttachVscToMountPointsRequestAttachInfos extends $dara.Model {
  /**
   * @example
   * i-2zehyz70ednszl6rrfj6
   */
  instanceId?: string;
  /**
   * @example
   * f-cfea9ae2ref87.cn-zhangjiakou.dfs.aliyuncs.com
   */
  mountPointId?: string;
  /**
   * @example
   * vsc-bp19yqmujug2r762cnabal
   */
  vscId?: string;
  /**
   * @example
   * xc
   */
  vscName?: string;
  /**
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
  attachInfos?: AttachVscToMountPointsRequestAttachInfos[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
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

