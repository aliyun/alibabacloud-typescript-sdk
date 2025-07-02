// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enableInstanceMetrics?: boolean;
  /**
   * @example
   * true
   */
  enableRequestMetrics?: boolean;
  /**
   * @example
   * DefaultRegex
   */
  logBeginRule?: string;
  /**
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @example
   * test-project
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      enableInstanceMetrics: 'enableInstanceMetrics',
      enableRequestMetrics: 'enableRequestMetrics',
      logBeginRule: 'logBeginRule',
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInstanceMetrics: 'boolean',
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

