// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoggingRequestLoggingDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore to which you want to save service logs.
   * 
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The type of service logs. Valid values:
   * 
   * *   consumergroup_log: the consumption delay logs of consumer groups.
   * *   logtail_alarm: the alert logs of Logtail.
   * *   operation_log: the operation logs.
   * *   logtail_profile: the collection logs of Logtail.
   * *   metering: the metering logs.
   * *   logtail_status: the status logs of Logtail.
   * *   scheduledsqlalert: the operational logs of Scheduled SQL jobs.
   * *   etl_alert: the operational logs of data transformation jobs.
   * 
   * This parameter is required.
   * 
   * @example
   * consumergroup_log
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoggingRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of service logs.
   * 
   * This parameter is required.
   */
  loggingDetails?: UpdateLoggingRequestLoggingDetails[];
  /**
   * @remarks
   * The name of the project to which you want to save service logs.
   * 
   * This parameter is required.
   * 
   * @example
   * my-project
   */
  loggingProject?: string;
  static names(): { [key: string]: string } {
    return {
      loggingDetails: 'loggingDetails',
      loggingProject: 'loggingProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loggingDetails: { 'type': 'array', 'itemType': UpdateLoggingRequestLoggingDetails },
      loggingProject: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loggingDetails)) {
      $dara.Model.validateArray(this.loggingDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

