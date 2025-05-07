// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceMetricInfo extends $dara.Model {
  /**
   * @example
   * a03aa9f9-3d32-4655-8394-05fd10dcbd8a
   */
  applicationID?: string;
  /**
   * @example
   * 1.98
   */
  cpuPercent?: number;
  /**
   * @example
   * 35.0
   */
  cpuQuotaPercent?: number;
  /**
   * @example
   * c-6498f0fe-33bb4f9249b54789a023
   */
  instanceID?: string;
  /**
   * @example
   * 512.0
   */
  memoryLimitMB?: number;
  /**
   * @example
   * 8.81
   */
  memoryUsageMB?: number;
  /**
   * @example
   * 1686568800000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      applicationID: 'applicationID',
      cpuPercent: 'cpuPercent',
      cpuQuotaPercent: 'cpuQuotaPercent',
      instanceID: 'instanceID',
      memoryLimitMB: 'memoryLimitMB',
      memoryUsageMB: 'memoryUsageMB',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationID: 'string',
      cpuPercent: 'number',
      cpuQuotaPercent: 'number',
      instanceID: 'string',
      memoryLimitMB: 'number',
      memoryUsageMB: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

