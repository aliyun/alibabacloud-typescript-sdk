// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarClawCronJobResponseBody extends $dara.Model {
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
   * The ID of the deleted cron job.
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
   * Indicates whether a matching cron job was found and deleted.
   * 
   * @example
   * true
   */
  removed?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      jobId: 'JobId',
      message: 'Message',
      ok: 'Ok',
      removed: 'Removed',
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
      removed: 'boolean',
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

