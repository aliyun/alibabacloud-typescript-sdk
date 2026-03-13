// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the collection of instance-level metrics. If you enable this feature, you can view core metrics, such as CPU utilization, memory usage, network conditions of instances, and the number of requests that an instance concurrently processes. Valid values: false: disables the collection of instance-level metrics. This is the default value. true: enables the collection of instance-level metrics.
   * 
   * @example
   * true
   */
  enableInstanceMetrics?: boolean;
  enableLlmMetrics?: boolean;
  /**
   * @remarks
   * Specifies whether to enable request-level metrics. If you enable this feature, you can view the amount of time and memory consumed for a specific invocation of each function in the service. Valid values: false: disables request-level metrics. true: enables request-level metrics. This is the default value.
   * 
   * @example
   * true
   */
  enableRequestMetrics?: boolean;
  /**
   * @remarks
   * The log segmentation rule.
   * 
   * @example
   * DefaultRegex
   */
  logBeginRule?: string;
  /**
   * @remarks
   * The name of the Logstore of Simple Log Service.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the project in Simple Log Service.
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

