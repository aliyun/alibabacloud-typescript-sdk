// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSignalResponseBody extends $dara.Model {
  /**
   * @example
   * dlc********
   */
  jobId?: string;
  /**
   * @example
   * 019F6385-7481-57A7-BEC9-***********
   */
  requestId?: string;
  /**
   * @example
   * SIGUSR1
   */
  signal?: string;
  /**
   * @example
   * oper************
   */
  signalId?: string;
  /**
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

