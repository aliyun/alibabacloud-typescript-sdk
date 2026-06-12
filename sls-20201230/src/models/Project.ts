// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Project extends $dara.Model {
  /**
   * @remarks
   * The time when the project was created.
   * 
   * @example
   * 2021-07-07 14:08:09
   */
  createTime?: string;
  /**
   * @remarks
   * The data redundancy type.
   * 
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @remarks
   * The description of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * Description of my-project
   */
  description?: string;
  /**
   * @remarks
   * The time when the project was last modified.
   * 
   * @example
   * 2022-04-18 13:30:19
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that owns the project.
   * 
   * @example
   * ""
   */
  owner?: string;
  /**
   * @remarks
   * The name of the project. The name is a part of the endpoint. The project name must be unique in a region of Alibaba Cloud. After a project is created, its name cannot be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * ali-test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The quota of the project.
   */
  quota?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the recycle bin is enabled.
   * 
   * @example
   * false
   */
  recycleBinEnabled?: boolean;
  /**
   * @remarks
   * The region where the project resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group to which the project belongs.
   * 
   * @example
   * rg-acf******sq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the project.
   * 
   * - Normal: The project is in the normal state.
   * 
   * - Disable: The project is disabled.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dataRedundancyType: 'dataRedundancyType',
      description: 'description',
      lastModifyTime: 'lastModifyTime',
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

