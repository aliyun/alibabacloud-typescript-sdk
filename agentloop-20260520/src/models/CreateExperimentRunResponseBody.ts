// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExperimentRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Experiment created, execution started.
   */
  message?: string;
  /**
   * @remarks
   * The experiment record ID. For online experiments, the format is typically exp-run-{uuid32}. For offline experiments, the format may also be a standard UUID.
   * 
   * @example
   * exp-run-f6d419b0ed3d43a7b585948a55efc07b
   */
  recordId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019F89B5-1B07-3BB3-A32E-F5B007029E9C
   */
  requestId?: string;
  /**
   * @remarks
   * The experiment record status. After creation, the status is typically pending.
   * 
   * @example
   * pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      recordId: 'recordId',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      recordId: 'string',
      requestId: 'string',
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

