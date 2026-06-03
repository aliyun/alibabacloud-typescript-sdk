// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigInstanceNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  privateWhiteList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  publicAccessControl?: number;
  publicWhiteList?: string[];
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      privateWhiteList: 'PrivateWhiteList',
      publicAccessControl: 'PublicAccessControl',
      publicWhiteList: 'PublicWhiteList',
      regionId: 'RegionId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      privateWhiteList: { 'type': 'array', 'itemType': 'string' },
      publicAccessControl: 'number',
      publicWhiteList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.privateWhiteList)) {
      $dara.Model.validateArray(this.privateWhiteList);
    }
    if(Array.isArray(this.publicWhiteList)) {
      $dara.Model.validateArray(this.publicWhiteList);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

