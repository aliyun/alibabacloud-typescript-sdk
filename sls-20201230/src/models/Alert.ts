// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertConfiguration } from "./AlertConfiguration";
import { Schedule } from "./Schedule";


export class Alert extends $dara.Model {
  /**
   * @remarks
   * The configuration of the alert rule.
   * 
   * This parameter is required.
   */
  configuration?: AlertConfiguration;
  /**
   * @remarks
   * The time when the alert rule was created.
   * 
   * @example
   * 1695090077
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the alert rule.
   * 
   * @example
   * Alert Desc
   */
  description?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * alertNameExample
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the alert rule was last modified.
   * 
   * @example
   * 1714274900
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * alert-123456
   */
  name?: string;
  /**
   * @remarks
   * The scheduling configuration.
   * 
   * This parameter is required.
   */
  schedule?: Schedule;
  /**
   * @remarks
   * The status of the alert rule.
   * 
   * @example
   * ENABLED/DISABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      name: 'name',
      schedule: 'schedule',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: AlertConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      schedule: Schedule,
      status: 'string',
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

