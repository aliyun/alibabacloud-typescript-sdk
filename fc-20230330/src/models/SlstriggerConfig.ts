// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobConfig } from "./JobConfig";
import { SLSTriggerLogConfig } from "./SlstriggerLogConfig";
import { SourceConfig } from "./SourceConfig";


export class SLSTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the trigger.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The invocation configurations. Simple Log Service passes the configurations into the function as part of the event. The configuration content must be a JSON string.
   */
  functionParameter?: { [key: string]: string };
  /**
   * @remarks
   * The interval at which the trigger reads logs, and the retry configuration upon errors.
   */
  jobConfig?: JobConfig;
  /**
   * @remarks
   * The log configurations of the trigger.
   */
  logConfig?: SLSTriggerLogConfig;
  /**
   * @remarks
   * The configurations of the trigger source.
   */
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

