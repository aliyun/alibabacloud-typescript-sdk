// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetJobConfig extends $dara.Model {
  /**
   * @remarks
   * The content of the dataset job configuration, in the JSON format.
   * 
   * @example
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   */
  config?: string;
  /**
   * @remarks
   * The type of the dataset job configuration.
   * 
   * @example
   * MultimodalIntelligentTag
   */
  configType?: string;
  /**
   * @remarks
   * The time when the dataset job was created.
   * 
   * @example
   * 2025-01-14T01:37:37Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the dataset job configuration.
   * 
   * @example
   * dscfg-xxxxxxxxxxxx
   */
  datasetJobConfigId?: string;
  datasetVersion?: string;
  /**
   * @remarks
   * The time when the dataset job was modified.
   * 
   * @example
   * 2024-10-11T02:18:54Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 234*34
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configType: 'ConfigType',
      createTime: 'CreateTime',
      datasetJobConfigId: 'DatasetJobConfigId',
      datasetVersion: 'DatasetVersion',
      modifyTime: 'ModifyTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configType: 'string',
      createTime: 'string',
      datasetJobConfigId: 'string',
      datasetVersion: 'string',
      modifyTime: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

