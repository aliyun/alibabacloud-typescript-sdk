// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * Experiment record updated successfully.
   */
  message?: string;
  /**
   * @remarks
   * The experiment record ID.
   * 
   * @example
   * a5397261-6e6d-4e45-bf52-feb8686f7524
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
   * The status after the update (the persisted value).
   * 
   * @example
   * running
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

