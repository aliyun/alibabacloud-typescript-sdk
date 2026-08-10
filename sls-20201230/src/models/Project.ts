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
  internalEndpoint?: string;
  internetEndpoint?: string;
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
   * The Alibaba Cloud account to which the project belongs.
   * 
   * @example
   * ""
   */
  owner?: string;
  /**
   * @remarks
   * The name of the project, which is used as part of the host. The project name is globally unique within an Alibaba Cloud region and cannot be modified after creation.
   * 
   * This parameter is required.
   * 
   * @example
   * ali-test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The project quota.
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
   * The region to which the project belongs.
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
   * The status of the project. Valid values:
   * 
   * - Normal: Normal.
   * - Disable: Disabled.
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
      internalEndpoint: 'internalEndpoint',
      internetEndpoint: 'internetEndpoint',
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
      internalEndpoint: 'string',
      internetEndpoint: 'string',
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

