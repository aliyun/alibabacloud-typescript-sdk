// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagDataAssetsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable lineage-based automatic backtracking.
   * 
   * @example
   * false
   */
  autoTraceEnabled?: boolean;
  /**
   * @remarks
   * The data asset IDs.
   * 
   * This parameter is required.
   */
  dataAssetIdsShrink?: string;
  /**
   * @remarks
   * The type of the data asset. Valid values:
   * 
   * *   ACS::DataWorks::Table
   * *   ACS::DataWorks::Task
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::DataWorks::Task
   */
  dataAssetType?: string;
  /**
   * @remarks
   * The environment of the workspace to which the data asset belongs. Valid values:
   * 
   * *   Dev: development environment
   * *   Prod: production environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The tags that you want to add to data assets.
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

