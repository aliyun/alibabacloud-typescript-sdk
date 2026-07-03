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
   * The data source. We recommend that you configure this in the custom agent.
   * 
   * @example
   * [{\\"DataSourceType\\":\\"database\\",\\"RegionId\\":\\"cn-hangzhou\\",\\"DmsInstanceId\\":\\"27xxxxx\\",\\"DmsDatabaseId\\":\\"752xxxxx\\",\\"Database\\":\\"employees\\",\\"Tables\\":[\\"employees\\",\\"salaries\\",\\"departments\\"]}]
   */
  dataset?: string;
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
   * The analysis mode.
   * 
   * @example
   * 0
   */
  mode?: number;
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
      evaluationPrompt: 'EvaluationPrompt',
      fileId: 'FileId',
      mode: 'Mode',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTest: 'string',
      agentId: 'string',
      dataset: 'string',
      evaluationPrompt: 'string',
      fileId: 'string',
      mode: 'number',
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
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.                                 
   * - **false**: The request failed.
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

