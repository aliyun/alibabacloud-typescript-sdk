// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProjectSummary extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      projectName: 'projectName',
      region: 'region',
      resourceGroupId: 'resourceGroupId',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      projectName: 'string',
      region: 'string',
      resourceGroupId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

