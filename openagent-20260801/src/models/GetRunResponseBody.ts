// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunResponseBodyDataOutcomeInterruptsDataApiCalls extends $dara.Model {
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * ExampleAction
   */
  action?: string;
  /**
   * @remarks
   * The operation description.
   * 
   * @example
   * Perform changes on the sample resource
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponseBodyDataOutcomeInterruptsData extends $dara.Model {
  /**
   * @remarks
   * The list of APIs pending approval.
   */
  apiCalls?: GetRunResponseBodyDataOutcomeInterruptsDataApiCalls[];
  /**
   * @remarks
   * The approval ID.
   * 
   * @example
   * approval_example_001
   */
  approvalId?: string;
  /**
   * @remarks
   * The approval URL.
   * 
   * @example
   * https://example.com/approvals/approval_example_001
   */
  approvalUrl?: string;
  /**
   * @remarks
   * Indicates whether it can be canceled.
   * 
   * @example
   * true
   */
  cancellable?: boolean;
  /**
   * @remarks
   * The change summary.
   * 
   * @example
   * example-change-digest
   */
  changeDigest?: string;
  /**
   * @remarks
   * The approval title.
   * 
   * @example
   * Sample change approval
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      apiCalls: 'apiCalls',
      approvalId: 'approvalId',
      approvalUrl: 'approvalUrl',
      cancellable: 'cancellable',
      changeDigest: 'changeDigest',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCalls: { 'type': 'array', 'itemType': GetRunResponseBodyDataOutcomeInterruptsDataApiCalls },
      approvalId: 'string',
      approvalUrl: 'string',
      cancellable: 'boolean',
      changeDigest: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiCalls)) {
      $dara.Model.validateArray(this.apiCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponseBodyDataOutcomeInterrupts extends $dara.Model {
  /**
   * @remarks
   * The interrupt data.
   */
  data?: GetRunResponseBodyDataOutcomeInterruptsData;
  /**
   * @remarks
   * The interrupt expiration time in ISO 8601 format.
   * 
   * @example
   * 2026-01-02T00:00:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The interrupt ID.
   * 
   * @example
   * interrupt_example_001
   */
  id?: string;
  /**
   * @remarks
   * The interrupt message.
   * 
   * @example
   * Specify the region of the target resource
   */
  message?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The interrupt reason. Valid values:
   * - `tool_call`: tool invocation requires handling
   * - `input_required`: user input is required
   * - `confirmation`: confirmation is required
   * - `out_of_band_approval`: waiting for out-of-band approval
   * 
   * @example
   * input_required
   */
  reason?: string;
  /**
   * @remarks
   * The JSON schema that the payload must comply with when resuming this interrupt.
   * 
   * @example
   * {"type":"object","properties":{"region":{"type":"string"}},"required":["region"]}
   */
  responseSchema?: { [key: string]: any };
  /**
   * @remarks
   * The tool invocation ID.
   * 
   * @example
   * tool_call_example_001
   */
  toolCallId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      expiresAt: 'expiresAt',
      id: 'id',
      message: 'message',
      metadata: 'metadata',
      reason: 'reason',
      responseSchema: 'responseSchema',
      toolCallId: 'toolCallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRunResponseBodyDataOutcomeInterruptsData,
      expiresAt: 'string',
      id: 'string',
      message: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      reason: 'string',
      responseSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      toolCallId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.responseSchema) {
      $dara.Model.validateMap(this.responseSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponseBodyDataOutcome extends $dara.Model {
  /**
   * @remarks
   * The interrupt list.
   */
  interrupts?: GetRunResponseBodyDataOutcomeInterrupts[];
  /**
   * @remarks
   * The result type. Valid values:
   * - `success`: successfully completed
   * - `interrupt`: waiting for interrupt handling
   * 
   * @example
   * interrupt
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      interrupts: 'interrupts',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interrupts: { 'type': 'array', 'itemType': GetRunResponseBodyDataOutcomeInterrupts },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.interrupts)) {
      $dara.Model.validateArray(this.interrupts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The run creation time in ISO 8601 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The run outcome.
   */
  outcome?: GetRunResponseBodyDataOutcome;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * run_example_001
   */
  runId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * session_example_001
   */
  sessionId?: string;
  /**
   * @remarks
   * The run status. Valid values:
   * - `PENDING`: pending execution
   * - `RUNNING`: running
   * - `WAITING_USER`: waiting for interrupt handling
   * - `COMPLETED`: completed
   * - `FAILED`: failed
   * - `CANCELLED`: canceled
   * - `REJECTED`: rejected
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The last update time of the run in ISO 8601 format.
   * 
   * @example
   * 2026-01-01T00:01:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      outcome: 'outcome',
      runId: 'runId',
      sessionId: 'sessionId',
      status: 'status',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      outcome: GetRunResponseBodyDataOutcome,
      runId: 'string',
      sessionId: 'string',
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.outcome && typeof (this.outcome as any).validate === 'function') {
      (this.outcome as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetRunResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRunResponseBodyData,
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

