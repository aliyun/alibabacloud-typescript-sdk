// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagDataAssetsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic data lineage backtracking.
   * 
   * @example
   * false
   */
  autoTraceEnabled?: boolean;
  /**
   * @remarks
   * The list of unique IDs of the data assets. You can call the ListDataAssets operation to query the IDs of data assets to which tags can be attached.
   * 
   * This parameter is required.
   */
  dataAssetIdsShrink?: string;
  /**
   * @remarks
   * The data asset type. Valid values:
   * - DataWorks table (ACS::DataWorks::Table)
   * - DataWorks scheduled task (ACS::DataWorks::Task)
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
   * - Dev (development environment)
   * - Prod (production environment)
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
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The list of data asset tags to attach.
   * 
   * This parameter is required.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      autoTraceEnabled: 'AutoTraceEnabled',
      dataAssetIdsShrink: 'DataAssetIds',
      dataAssetType: 'DataAssetType',
      envType: 'EnvType',
      projectId: 'ProjectId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoTraceEnabled: 'boolean',
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

