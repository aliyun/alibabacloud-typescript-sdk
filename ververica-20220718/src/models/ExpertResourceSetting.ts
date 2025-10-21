// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BasicResourceSettingSpec } from "./BasicResourceSettingSpec";


export class ExpertResourceSetting extends $dara.Model {
  jobmanagerResourceSettingSpec?: BasicResourceSettingSpec;
  resourcePlan?: string;
  static names(): { [key: string]: string } {
    return {
      jobmanagerResourceSettingSpec: 'jobmanagerResourceSettingSpec',
      resourcePlan: 'resourcePlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobmanagerResourceSettingSpec: BasicResourceSettingSpec,
      resourcePlan: 'string',
    };
  }

  validate() {
    if(this.jobmanagerResourceSettingSpec && typeof (this.jobmanagerResourceSettingSpec as any).validate === 'function') {
      (this.jobmanagerResourceSettingSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

