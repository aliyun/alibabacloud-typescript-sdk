// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentAccuracyTestRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom agent for which you want to run the accuracy test.
   * 
   * @example
   * ca-xxxxxxxxxxxxxxxxxxxx
   */
  customAgentId?: string;
  /**
   * @remarks
   * The data source. We recommend that you configure this in the custom agent.
   * 
   * @example
   * [{\\"DataSourceType\\":\\"database\\",\\"RegionId\\":\\"cn-hangzhou\\",\\"DmsInstanceId\\":\\"27xxx49\\",\\"DmsDatabaseId\\":\\"75xxx6\\",\\"Database\\":\\"employees\\",\\"Tables\\":[\\"employees\\",\\"salaries\\",\\"departments\\"]}]
   */
  dataset?: string;
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
   * The DMS unit used to create the resource.
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
   * f-xxxxxxxxxxxxxxxxxxxx
   */
  fileId?: string;
  /**
   * @remarks
   * The language used for the analysis task.
   * 
   * @example
   * ENGLISH
   */
  language?: string;
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
   * The analysis mode.
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
   * Test01
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether sessions are displayed after the analysis. This parameter is not supported.
   * 
   * @example
   * null
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
   * xxxxxxxxxxxxxxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      dataset: 'Dataset',
      desc: 'Desc',
      dmsUnit: 'DmsUnit',
      evaluationPrompt: 'EvaluationPrompt',
      fileId: 'FileId',
      language: 'Language',
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
      customAgentId: 'string',
      dataset: 'string',
      desc: 'string',
      dmsUnit: 'string',
      evaluationPrompt: 'string',
      fileId: 'string',
      language: 'string',
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

