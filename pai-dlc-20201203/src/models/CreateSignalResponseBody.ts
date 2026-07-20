// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSignalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc********
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019F6385-7481-57A7-BEC9-***********
   */
  requestId?: string;
  /**
   * @remarks
   * The signal code.
   * 
   * @example
   * SIGUSR1
   */
  signal?: string;
  /**
   * @remarks
   * The signal ID.
   * 
   * @example
   * oper************
   */
  signalId?: string;
  /**
   * @remarks
   * The signal status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      signal: 'Signal',
      signalId: 'SignalId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      signal: 'string',
      signalId: 'string',
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

