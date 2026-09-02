// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentDataSemanticsExample } from "./AgentDataSemanticsExample";
import { AgentDataSemanticsJoin } from "./AgentDataSemanticsJoin";
import { AgentDataSemanticsMetric } from "./AgentDataSemanticsMetric";
import { AgentDataSemanticsStageProgress } from "./AgentDataSemanticsStageProgress";
import { AgentDataSemanticsText } from "./AgentDataSemanticsText";


export class GetGenerateAgentDataSemanticsProgressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the generation task fails.
   * 
   * @example
   * DataSemanticsGenerateFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the generation task fails.
   * 
   * @example
   * Failed to generate data semantics. Please retry later.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The SQL example knowledge returned when the generation is complete. A maximum of 50 items can be returned.
   */
  examples?: AgentDataSemanticsExample[];
  /**
   * @remarks
   * The data association knowledge returned when the generation is complete. A maximum of 100 items can be returned.
   */
  joins?: AgentDataSemanticsJoin[];
  /**
   * @remarks
   * The SQL expression knowledge returned when the generation is complete. A maximum of 100 items can be returned.
   */
  metrics?: AgentDataSemanticsMetric[];
  /**
   * @remarks
   * The four-phase stage progress. This parameter may not be returned when the overall generation is complete.
   */
  progress?: AgentDataSemanticsStageProgress[];
  /**
   * @remarks
   * The current overall stage.
   * 
   * @example
   * GENERATE
   */
  stage?: string;
  /**
   * @remarks
   * The Markdown text knowledge returned when the generation is complete.
   */
  text?: AgentDataSemanticsText;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      examples: 'Examples',
      joins: 'Joins',
      metrics: 'Metrics',
      progress: 'Progress',
      stage: 'Stage',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      examples: { 'type': 'array', 'itemType': AgentDataSemanticsExample },
      joins: { 'type': 'array', 'itemType': AgentDataSemanticsJoin },
      metrics: { 'type': 'array', 'itemType': AgentDataSemanticsMetric },
      progress: { 'type': 'array', 'itemType': AgentDataSemanticsStageProgress },
      stage: 'string',
      text: AgentDataSemanticsText,
    };
  }

  validate() {
    if(Array.isArray(this.examples)) {
      $dara.Model.validateArray(this.examples);
    }
    if(Array.isArray(this.joins)) {
      $dara.Model.validateArray(this.joins);
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(Array.isArray(this.progress)) {
      $dara.Model.validateArray(this.progress);
    }
    if(this.text && typeof (this.text as any).validate === 'function') {
      (this.text as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGenerateAgentDataSemanticsProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code of the operation.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The generation progress details. When the initial generation is complete, a full snapshot of the current generation round is returned. When regeneration is complete, the current Metrics, Joins, Examples, and new Text are returned. To discard a regeneration, first call Get to retrieve the current official version, and then call Save with the four types of content unchanged to idempotently clean up temporary results.
   */
  data?: GetGenerateAgentDataSemanticsProgressResponseBodyData;
  /**
   * @remarks
   * The response message. If the request fails, an error message is returned.
   * 
   * @example
   * Data semantics generation task not found.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generates for the request.
   * 
   * @example
   * 5DAF96FB-A4DF-548C-B8A1-F2A8D2F4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGenerateAgentDataSemanticsProgressResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

