// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobConfig } from "./JobConfig";
import { SLSTriggerLogConfig } from "./SlstriggerLogConfig";
import { SourceConfig } from "./SourceConfig";


export class SLSTriggerConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  functionParameter?: { [key: string]: string };
  jobConfig?: JobConfig;
  logConfig?: SLSTriggerLogConfig;
  sourceConfig?: SourceConfig;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      functionParameter: 'functionParameter',
      jobConfig: 'jobConfig',
      logConfig: 'logConfig',
      sourceConfig: 'sourceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      functionParameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      jobConfig: JobConfig,
      logConfig: SLSTriggerLogConfig,
      sourceConfig: SourceConfig,
    };
  }

  validate() {
    if(this.functionParameter) {
      $dara.Model.validateMap(this.functionParameter);
    }
    if(this.jobConfig && typeof (this.jobConfig as any).validate === 'function') {
      (this.jobConfig as any).validate();
    }
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.sourceConfig && typeof (this.sourceConfig as any).validate === 'function') {
      (this.sourceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

