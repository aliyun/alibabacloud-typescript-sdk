// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowJobInfo extends $dara.Model {
  /**
   * @remarks
   * Whether to display. Possible values are:
   * - true: Display.
   * - false: Do not display.
   * 
   * @example
   * true
   */
  display?: boolean;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 1475***441221943296
   */
  jobId?: string;
  /**
   * @remarks
   * Task Type. Currently, only DOWNLOWD_MARKRESULT_FLOW is supported.
   * 
   * @example
   * DOWNLOWD_MARKRESULT_FLOW
   */
  jobType?: string;
  /**
   * @remarks
   * Message ID.
   * 
   * @example
   * 792B76F4000E681A95155146A002D5F8
   */
  messageId?: string;
  /**
   * @remarks
   * Processing information.
   * 
   * @example
   * NEW_INIT
   */
  processType?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 1543***518306500608
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      jobId: 'JobId',
      jobType: 'JobType',
      messageId: 'MessageId',
      processType: 'ProcessType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
      jobId: 'string',
      jobType: 'string',
      messageId: 'string',
      processType: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

