// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachVscFromMountPointsRequestDetachInfos extends $dara.Model {
  instanceId?: string;
  mountPointId?: string;
  vscId?: string;
  vscName?: string;
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

export class DetachVscFromMountPointsRequest extends $dara.Model {
  detachInfos?: DetachVscFromMountPointsRequestDetachInfos[];
  /**
   * @remarks
   * This parameter is required.
   */
  inputRegionId?: string;
  useAssumeRoleChkServerPerm?: boolean;
  static names(): { [key: string]: string } {
    return {
      detachInfos: 'DetachInfos',
      inputRegionId: 'InputRegionId',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachInfos: { 'type': 'array', 'itemType': DetachVscFromMountPointsRequestDetachInfos },
      inputRegionId: 'string',
      useAssumeRoleChkServerPerm: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.detachInfos)) {
      $dara.Model.validateArray(this.detachInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

