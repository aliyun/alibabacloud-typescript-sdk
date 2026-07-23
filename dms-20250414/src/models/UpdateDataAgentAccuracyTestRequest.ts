// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAgentAccuracyTestRequest extends $dara.Model {
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
   * The new custom agent ID.
   * 
   * @example
   * ca-xxxxxxxxxxxxxxxxxxxx
   */
  customerAgentId?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * [{\\"DataSourceType\\":\\"database\\",\\"RegionId\\":\\"cn-hangzhou\\",\\"DmsInstanceId\\":\\"27xxxxx\\",\\"DmsDatabaseId\\":\\"752xxxxx\\",\\"Database\\":\\"employees\\",\\"Tables\\":[\\"employees\\",\\"salaries\\",\\"departments\\"]}]
   */
  dataset?: string;
  datasource?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * null
   */
  desc?: string;
  /**
   * @remarks
   * The current Data Management unit.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The accuracy evaluation criteria. An empty value indicates the default criteria.
   * 
   * @example
   * null
   */
  evaluationPrompt?: string;
  /**
   * @remarks
   * The file ID in the data center.
   * 
   * @example
   * f-8*******01m
   */
  fileId?: string;
  /**
   * @remarks
   * The maximum number of concurrent sessions during the test.
   * 
   * @example
   * 5
   */
  maxConcurrent?: number;
  /**
   * @remarks
   * The analysis mode to be tested.
   * 
   * @example
   * 0
   */
  mode?: number;
  /**
   * @remarks
   * The name of the test item.
   * 
   * @example
   * test123
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether sessions are displayed after analysis. This parameter is not supported.
   * 
   * @example
   * no use
   */
  needDelete?: boolean;
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
   * The workspace ID.
   * 
   * @example
   * 8wfig6l33n4f4xxxxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accuracyTestInsId: 'AccuracyTestInsId',
      customerAgentId: 'CustomerAgentId',
      dataset: 'Dataset',
      datasource: 'Datasource',
      desc: 'Desc',
      dmsUnit: 'DmsUnit',
      evaluationPrompt: 'EvaluationPrompt',
      fileId: 'FileId',
      maxConcurrent: 'MaxConcurrent',
      mode: 'Mode',
      name: 'Name',
      needDelete: 'NeedDelete',
      regionId: 'RegionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTestInsId: 'string',
      customerAgentId: 'string',
      dataset: 'string',
      datasource: 'string',
      desc: 'string',
      dmsUnit: 'string',
      evaluationPrompt: 'string',
      fileId: 'string',
      maxConcurrent: 'number',
      mode: 'number',
      name: 'string',
      needDelete: 'boolean',
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

