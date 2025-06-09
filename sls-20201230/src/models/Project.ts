// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Project extends $dara.Model {
  createTime?: string;
  /**
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  lastModifyTime?: string;
  location?: string;
  owner?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  quota?: { [key: string]: any };
  /**
   * @example
   * false
   */
  recycleBinEnabled?: boolean;
  region?: string;
  resourceGroupId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dataRedundancyType: 'dataRedundancyType',
      description: 'description',
      lastModifyTime: 'lastModifyTime',
      location: 'location',
      owner: 'owner',
      projectName: 'projectName',
      quota: 'quota',
      recycleBinEnabled: 'recycleBinEnabled',
      region: 'region',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataRedundancyType: 'string',
      description: 'string',
      lastModifyTime: 'string',
      location: 'string',
      owner: 'string',
      projectName: 'string',
      quota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      recycleBinEnabled: 'boolean',
      region: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.quota) {
      $dara.Model.validateMap(this.quota);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

