// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAgentAccuracyTestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the accuracy test item.
   * 
   * @example
   * at-106n4rg17gv9fxxxxxxxxxx
   */
  accuracyTest?: string;
  /**
   * @remarks
   * Agent Id
   * 
   * @example
   * cu0cs*******mf
   */
  agentId?: string;
  /**
   * @remarks
   * The evaluation dataset.
   * 
   * @example
   * ds-9z6***74al
   */
  dataset?: string;
  /**
   * @remarks
   * The data source information.
   * 
   * @example
   * {"DataSourceType":"remote_data_center","DmsDatabaseId":"f-894***01m","FileId":"f-894***01m","Database":"data.csv","Tables":["example"],"TableIds":["aij5***qf8"],"RegionId":"cn-hangzhou"}]
   */
  datasource?: string;
  /**
   * @remarks
   * The description of the evaluation item.
   * 
   * @example
   * Customer Agent\\"s Evaluation
   */
  desc?: string;
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
   * The file ID.
   * 
   * @example
   * f-8*******01m
   */
  fileId?: string;
  /**
   * @remarks
   * The maximum concurrency limit for the evaluation task.
   * 
   * @example
   * 15
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
   * The name of the evaluation item.
   * 
   * @example
   * Evaluation_for_customagent213
   */
  name?: string;
  /**
   * @remarks
   * Reserved.
   * 
   * @example
   * false
   */
  needDelete?: boolean;
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
      accuracyTest: 'AccuracyTest',
      agentId: 'AgentId',
      dataset: 'Dataset',
      datasource: 'Datasource',
      desc: 'Desc',
      evaluationPrompt: 'EvaluationPrompt',
      fileId: 'FileId',
      maxConcurrent: 'MaxConcurrent',
      mode: 'Mode',
      name: 'Name',
      needDelete: 'NeedDelete',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTest: 'string',
      agentId: 'string',
      dataset: 'string',
      datasource: 'string',
      desc: 'string',
      evaluationPrompt: 'string',
      fileId: 'string',
      maxConcurrent: 'number',
      mode: 'number',
      name: 'string',
      needDelete: 'boolean',
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

export class UpdateDataAgentAccuracyTestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: UpdateDataAgentAccuracyTestResponseBodyData;
  /**
   * @remarks
   * The error code returned when an exception occurs.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E0D21075-xxx-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.                                 
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateDataAgentAccuracyTestResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

