// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunPolarClawCronJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The unique ID for this job execution.
   * 
   * @example
   * 8006e51c-dab3-4602-bc69-4f728002c6ce
   */
  jobId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * Indicates whether the job actually ran.
   * 
   * @example
   * true
   */
  ran?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C61892A4-0850-4516-9E26-44D96C1782DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      jobId: 'JobId',
      message: 'Message',
      ok: 'Ok',
      ran: 'Ran',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      jobId: 'string',
      message: 'string',
      ok: 'boolean',
      ran: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

