// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertConfiguration } from "./AlertConfiguration";
import { Schedule } from "./Schedule";


export class UpdateAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed configurations of the alert rule.
   * 
   * This parameter is required.
   */
  configuration?: AlertConfiguration;
  /**
   * @remarks
   * The description of the alert rule.
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * The display name of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * this is alert
   */
  displayName?: string;
  /**
   * @remarks
   * The scheduling settings of the alert rule.
   * 
   * This parameter is required.
   */
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: AlertConfiguration,
      description: 'string',
      displayName: 'string',
      schedule: Schedule,
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

