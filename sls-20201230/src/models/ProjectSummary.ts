// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProjectSummary extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1714360481
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
   * 
   * @example
   * ali-test-project
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-acf******sq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1710230272
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

