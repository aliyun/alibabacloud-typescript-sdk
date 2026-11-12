// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageRequestAttachments extends $dara.Model {
  /**
   * @remarks
   * The file name extension.
   * 
   * @example
   * xlsx
   */
  fileExtension?: string;
  /**
   * @remarks
   * The ID of the file after it is uploaded.
   * 
   * @example
   * att_12345678
   */
  fileId?: string;
  /**
   * @remarks
   * The original name of the file.
   * 
   * @example
   * file.xlsx
   */
  sourceName?: string;
  /**
   * @remarks
   * The workspace path.
   * 
   * @example
   * source/att_12345678.xlsx
   */
  workspacePath?: string;
  static names(): { [key: string]: string } {
    return {
      fileExtension: 'fileExtension',
      fileId: 'fileId',
      sourceName: 'sourceName',
      workspacePath: 'workspacePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileExtension: 'string',
      fileId: 'string',
      sourceName: 'string',
      workspacePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequestResume extends $dara.Model {
  /**
   * @remarks
   * The ID of the interrupt to be replied to. Obtain this value from data.outcome.interrupts[].id in the SSE RUN_FINISHED event or the GetRun response.
   * 
   * @example
   * interrupt_example_001
   */
  interruptId?: string;
  /**
   * @remarks
   * The interrupt handling result. This parameter is required when status is set to resolved and must conform to the responseSchema of the corresponding interrupt. Do not pass this parameter when status is set to cancelled.
   * 
   * @example
   * {"region":"cn-hangzhou"}
   */
  payload?: any;
  /**
   * @remarks
   * The reply method for the interrupt. Valid values: resolved (submits the answer, confirmation, or tool result required by the interrupt, and must include payload) and cancelled (cancels the interrupt without passing payload).
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
   * The list of attachments.
   * 
   * @example
   * []
   */
  attachments?: SendMessageRequestAttachments[];
  /**
   * @remarks
   * The message text in MESSAGE mode. This parameter cannot be empty. The type parameter can be omitted in this mode.
   * 
   * @example
   * Query the status of the sample resource without making changes
   */
  content?: string;
  /**
   * @remarks
   * The list of interrupt replies. This parameter is required when type is set to RESUME. You must reply to all pending interrupts at once. Each interruptId can appear only once.
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
   * The request type. Valid values: MESSAGE (sends a message), RESUME (resumes a run), and RECONNECT (reconnects to a run). Default value: MESSAGE.
   * 
   * @example
   * MESSAGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
      content: 'content',
      resume: 'resume',
      runId: 'runId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': SendMessageRequestAttachments },
      content: 'string',
      resume: { 'type': 'array', 'itemType': SendMessageRequestResume },
      runId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    if(Array.isArray(this.resume)) {
      $dara.Model.validateArray(this.resume);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

