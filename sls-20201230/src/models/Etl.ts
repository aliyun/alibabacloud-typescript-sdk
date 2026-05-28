// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ETLConfiguration } from "./Etlconfiguration";


export class ETL extends $dara.Model {
  /**
   * @remarks
   * The configurations of the data transformation job.
   * 
   * This parameter is required.
   */
  configuration?: ETLConfiguration;
  /**
   * @remarks
   * The time when the data transformation job was created.
   * 
   * @example
   * 1714274900
   */
  createTime?: number;
  /**
   * @remarks
   * job description
   * 
   * @example
   * ETL
   */
  description?: string;
  /**
   * @remarks
   * job displayName
   * 
   * This parameter is required.
   * 
   * @example
   * ETL
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the data transformation job was last modified.
   * 
   * @example
   * 1714274900
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * job name
   * 
   * This parameter is required.
   * 
   * @example
   * ETL
   */
  name?: string;
  /**
   * @remarks
   * The ID of the scheduler.
   * 
   * @example
   * f0eb655e501a8780808d1970ef6d04c4
   */
  scheduleId?: string;
  /**
   * @remarks
   * The status of the data transformation job. Valid values:
   * 
   * 1.  RUNNING
   * 2.  STOPPING
   * 3.  STOPPED
   * 4.  SUCCEEDED
   * 5.  FAILED
   * 6.  STARTING
   * 7.  RESTARTING
   * 
   * @example
   * RUNNING
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
      scheduleId: 'scheduleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ETLConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      scheduleId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

