// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ETLConfiguration } from "./Etlconfiguration";


export class ETL extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: ETLConfiguration;
  /**
   * @example
   * 1714274900
   */
  createTime?: number;
  /**
   * @example
   * 加工作业
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * etljob
   */
  displayName?: string;
  /**
   * @example
   * 1714274900
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * etl-20240426
   */
  name?: string;
  /**
   * @example
   * f0eb655e501a8780808d1970ef6d04c4
   */
  scheduleId?: string;
  /**
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

