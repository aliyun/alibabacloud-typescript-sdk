// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable instance-level metrics. After you enable this feature, you can view core metrics such as CPU usage, memory usage, network status, and request count at the instance level. Valid values: false: disables instance-level metrics. This is the default value. true: enables instance-level metrics.
   * 
   * @example
   * true
   */
  enableInstanceMetrics?: boolean;
  /**
   * @remarks
   * Specifies whether to enable LLM metrics. After you enable this feature, you can view LLM metrics. We recommend that you enable this feature only for LLM inference services. Valid values: false: disables LLM metrics. This is the default value. true: enables LLM metrics.
   */
  enableLlmMetrics?: boolean;
  /**
   * @remarks
   * Specifies whether to enable request-level metrics. After you enable this feature, you can view the time and memory consumed by each invocation of all functions in the service. Valid values: false: disables request-level metrics. true: enables request-level metrics. This is the default value.
   * 
   * @example
   * true
   */
  enableRequestMetrics?: boolean;
  /**
   * @remarks
   * The log line beginning matching rule.
   * 
   * @example
   * DefaultRegex
   */
  logBeginRule?: string;
  /**
   * @remarks
   * The Logstore name in Simple Log Service.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The project name in Simple Log Service.
   * 
   * @example
   * test-project
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      enableInstanceMetrics: 'enableInstanceMetrics',
      enableLlmMetrics: 'enableLlmMetrics',
      enableRequestMetrics: 'enableRequestMetrics',
      logBeginRule: 'logBeginRule',
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInstanceMetrics: 'boolean',
      enableLlmMetrics: 'boolean',
      enableRequestMetrics: 'boolean',
      logBeginRule: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

