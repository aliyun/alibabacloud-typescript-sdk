// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIMediaAuditJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * bdbc266af6893943a70176d92e99****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the media file.
   * 
   * @example
   * fe028d09441afffb138cd7ee****
   */
  mediaId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F4631053-8D9F-42B2-4A67281DB88E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
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

