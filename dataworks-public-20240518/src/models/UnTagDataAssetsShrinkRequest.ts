// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnTagDataAssetsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique IDs of the data assets.
   * 
   * This parameter is required.
   */
  dataAssetIdsShrink?: string;
  /**
   * @remarks
   * The type of the data asset. Valid values:
   * - Data table (ACS::DataWorks::Table)
   * - Scheduled task (ACS::DataWorks::Task)
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::DataWorks::Task
   */
  dataAssetType?: string;
  /**
   * @remarks
   * The workspace environment to which the data asset belongs. Valid values:
   * 
   * - Dev: development environment
   * 
   * - Prod: production environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The tags to disassociate.
   * 
   * This parameter is required.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dataAssetIdsShrink: 'DataAssetIds',
      dataAssetType: 'DataAssetType',
      envType: 'EnvType',
      projectId: 'ProjectId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAssetIdsShrink: 'string',
      dataAssetType: 'string',
      envType: 'string',
      projectId: 'number',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

