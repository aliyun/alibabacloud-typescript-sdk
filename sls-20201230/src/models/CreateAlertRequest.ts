// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertConfiguration } from "./AlertConfiguration";
import { Schedule } from "./Schedule";


export class CreateAlertRequest extends $dara.Model {
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
   * An alert rule
   */
  description?: string;
  /**
   * @remarks
   * The display name of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * test-alert
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the alert rule. Make sure that the name is unique in a project.
   * 
   * This parameter is required.
   * 
   * @example
   * alert-123456
   */
  name?: string;
  /**
   * @remarks
   * The scheduling configurations of the alert rule.
   * 
   * This parameter is required.
   */
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: AlertConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
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

