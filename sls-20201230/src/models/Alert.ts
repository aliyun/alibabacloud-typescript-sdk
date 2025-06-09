// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertConfiguration } from "./AlertConfiguration";
import { Schedule } from "./Schedule";


export class Alert extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: AlertConfiguration;
  createTime?: number;
  /**
   * @example
   * Alert Desc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alertNameExample
   */
  displayName?: string;
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alert-123456
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schedule?: Schedule;
  /**
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

