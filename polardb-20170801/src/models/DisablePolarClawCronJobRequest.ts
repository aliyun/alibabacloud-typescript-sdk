// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisablePolarClawCronJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the cron job to disable.
   * 
   * This parameter is required.
   * 
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e
   */
  jobId?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after the job is disabled. The default value is `true`.
   * 
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      jobId: 'JobId',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      jobId: 'string',
      restart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

