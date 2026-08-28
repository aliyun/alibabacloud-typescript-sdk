// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BasicResourceSettingSpec } from "./BasicResourceSettingSpec";


export class BasicResourceSetting extends $dara.Model {
  /**
   * @remarks
   * The JobManager resource settings.
   */
  jobmanagerResourceSettingSpec?: BasicResourceSettingSpec;
  /**
   * @remarks
   * The concurrency.
   * 
   * @example
   * 4
   */
  parallelism?: number;
  /**
   * @remarks
   * The TaskManager resource settings.
   */
  taskmanagerResourceSettingSpec?: BasicResourceSettingSpec;
  static names(): { [key: string]: string } {
    return {
      jobmanagerResourceSettingSpec: 'jobmanagerResourceSettingSpec',
      parallelism: 'parallelism',
      taskmanagerResourceSettingSpec: 'taskmanagerResourceSettingSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobmanagerResourceSettingSpec: BasicResourceSettingSpec,
      parallelism: 'number',
      taskmanagerResourceSettingSpec: BasicResourceSettingSpec,
    };
  }

  validate() {
    if(this.jobmanagerResourceSettingSpec && typeof (this.jobmanagerResourceSettingSpec as any).validate === 'function') {
      (this.jobmanagerResourceSettingSpec as any).validate();
    }
    if(this.taskmanagerResourceSettingSpec && typeof (this.taskmanagerResourceSettingSpec as any).validate === 'function') {
      (this.taskmanagerResourceSettingSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

