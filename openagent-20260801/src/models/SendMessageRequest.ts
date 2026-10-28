// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageRequestResume extends $dara.Model {
  /**
   * @remarks
   * The ID of the interrupt to be replied to. Obtain this value from `data.outcome.interrupts[].id` in the SSE `RUN_FINISHED` event or `data.outcome.interrupts[].id` in the `GetRun` response.
   * 
   * @example
   * interrupt_example_001
   */
  interruptId?: string;
  /**
   * @remarks
   * The interrupt handling result. This parameter is required when `status` is set to `resolved` and must conform to the `responseSchema` of the corresponding interrupt. Do not pass this parameter when `status` is set to `cancelled`.
   * 
   * @example
   * {"region":"cn-hangzhou"}
   */
  payload?: any;
  /**
   * @remarks
   * The reply method for the current interrupt. `resolved` indicates that the answer, confirmation, or tool result required by the interrupt is submitted, and `payload` must be provided. `cancelled` indicates that the interrupt is canceled, and `payload` is not passed.
   * 
   * @example
   * resolved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      interruptId: 'interruptId',
      payload: 'payload',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interruptId: 'string',
      payload: 'any',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The message text in MESSAGE mode. This parameter cannot be empty. The type can be omitted in this mode.
   * 
   * @example
   * Query the status of the sample resource without making any changes
   */
  content?: string;
  /**
   * @remarks
   * The list of interrupt replies. This parameter is required when `type` is set to `RESUME`. You must reply to all pending interrupts at once, and each `interruptId` can appear only once.
   */
  resume?: SendMessageRequestResume[];
  /**
   * @remarks
   * The ID of the active run to resubscribe to. This parameter is required in RECONNECT mode.
   * 
   * @example
   * run_example_001
   */
  runId?: string;
  /**
   * @remarks
   * The request type. Valid values: `MESSAGE` (sends a message), `RESUME` (resumes a run), and `RECONNECT` (reconnects to a run). Default value: `MESSAGE`.
   * 
   * @example
   * MESSAGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      resume: 'resume',
      runId: 'runId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      resume: { 'type': 'array', 'itemType': SendMessageRequestResume },
      runId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resume)) {
      $dara.Model.validateArray(this.resume);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

