// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunAgentResponseBodyDataFunctionCallResponses } from "./RunAgentResponseBodyDataFunctionCallResponses";
import { RunAgentResponseBodyDataResponse } from "./RunAgentResponseBodyDataResponse";


export class RunAgentResponseBodyData extends $dara.Model {
  functionCallResponses?: RunAgentResponseBodyDataFunctionCallResponses[];
  /**
   * @example
   * 766
   */
  inputTokens?: number;
  /**
   * @example
   * 988
   */
  outputTokens?: number;
  response?: RunAgentResponseBodyDataResponse;
  /**
   * @example
   * 4vlag5ken3
   */
  threadId?: string;
  /**
   * @example
   * 5bdb9809856c58acb92001f8ae65773c
   */
  traceId?: string;
  /**
   * @example
   * w4paqoezm2
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      functionCallResponses: 'functionCallResponses',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      response: 'response',
      threadId: 'threadId',
      traceId: 'traceId',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionCallResponses: { 'type': 'array', 'itemType': RunAgentResponseBodyDataFunctionCallResponses },
      inputTokens: 'number',
      outputTokens: 'number',
      response: RunAgentResponseBodyDataResponse,
      threadId: 'string',
      traceId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functionCallResponses)) {
      $dara.Model.validateArray(this.functionCallResponses);
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

