// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDataAgentAccuracyTestTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The accuracy test instance ID.
   * 
   * @example
   * at-106n4rg17gv9fxxxxxxxxxx
   */
  accuracyTestInsId?: string;
  /**
   * @remarks
   * The accuracy test sample.
   * 
   * @example
   * 包含问题、答案[、SQL]的文件
   */
  csvFile?: string;
  /**
   * @remarks
   * The DMS unit used to create the resource.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 8wfig6l33n4f4xxxxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accuracyTestInsId: 'AccuracyTestInsId',
      csvFile: 'CsvFile',
      dmsUnit: 'DmsUnit',
      regionId: 'RegionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTestInsId: 'string',
      csvFile: 'string',
      dmsUnit: 'string',
      regionId: 'string',
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

