// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunPolarClawCronJobRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the cron job to run.
   * 
   * This parameter is required.
   * 
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e
   */
  jobId?: string;
  /**
   * @remarks
   * The execution mode. Valid values: force and due. Default value: force.
   * 
   * @example
   * force
   */
  mode?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after the job completes. Default value: true.
   * 
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      jobId: 'JobId',
      mode: 'Mode',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      jobId: 'string',
      mode: 'string',
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

