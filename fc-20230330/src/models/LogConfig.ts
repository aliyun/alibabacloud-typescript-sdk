// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable instance-level metrics. When this feature is enabled, you can view core metrics for each instance, such as CPU usage, memory usage, network conditions, and the number of requests. The default value is \\`false\\`, which disables instance-level metrics. Set the value to \\`true\\` to enable them.
   * 
   * @example
   * true
   */
  enableInstanceMetrics?: boolean;
  enableLlmMetrics?: boolean;
  /**
   * @remarks
   * Specifies whether to enable request-level metrics. When this feature is enabled, you can view the time and memory consumed by each function invocation in the service. The default value is \\`true\\`, which enables request-level metrics. Set the value to \\`false\\` to disable them.
   * 
   * @example
   * true
   */
  enableRequestMetrics?: boolean;
  /**
   * @remarks
   * The rule for matching the first line of a log entry.
   * 
   * @example
   * DefaultRegex
   */
  logBeginRule?: string;
  /**
   * @remarks
   * The name of the Logstore in Simple Log Service.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Project in Simple Log Service.
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

