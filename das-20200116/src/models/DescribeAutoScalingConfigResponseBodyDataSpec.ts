// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoScalingConfigResponseBodyDataSpec extends $dara.Model {
  /**
   * @remarks
   * The quiescent period. The return value consists of a numeric value and a time unit suffix. Valid values of the time unit suffix:
   * 
   * *   **s**: seconds.
   * *   **m**: minutes.
   * *   **h**: hours.
   * *   **d**: days.
   * 
   * >  A value of **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  coolDownTime?: string;
  /**
   * @remarks
   * The average CPU utilization threshold that triggers automatic specification scale-up. Unit: %.
   * 
   * @example
   * 70
   */
  cpuUsageUpperThreshold?: number;
  /**
   * @remarks
   * Indicates whether the automatic specification scale-down feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The maximum number of read-only nodes of the instance.
   * 
   * @example
   * 10
   */
  maxReadOnlyNodes?: number;
  /**
   * @remarks
   * The maximum specifications to which the cluster can be scaled up. For more information about the specifications of each type of supported database instances, see the following topics:
   * 
   * *   PolarDB for MySQL Cluster Edition instances: [Compute node specifications of PolarDB for MySQL Enterprise Edition](https://help.aliyun.com/document_detail/102542.html)
   * *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs: [Specifications](https://help.aliyun.com/document_detail/276974.html)
   * 
   * @example
   * polar.mysql.x8.12xlarge
   */
  maxSpec?: string;
  /**
   * @remarks
   * The average memory usage threshold that triggers automatic specification scale-up. Unit: %.
   * 
   * @example
   * 70
   */
  memUsageUpperThreshold?: number;
  /**
   * @remarks
   * The observation window. The return value consists of a numeric value and a time unit suffix. Valid values of the time unit suffix:
   * 
   * *   **s**: seconds.
   * *   **m**: minutes.
   * *   **h**: hours.
   * *   **d**: days.
   * 
   * >  A value of **5m** indicates 5 minutes.
   * 
   * @example
   * 5m
   */
  observationWindowSize?: string;
  /**
   * @remarks
   * Indicates whether the automatic specification scale-up feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      coolDownTime: 'CoolDownTime',
      cpuUsageUpperThreshold: 'CpuUsageUpperThreshold',
      downgrade: 'Downgrade',
      maxReadOnlyNodes: 'MaxReadOnlyNodes',
      maxSpec: 'MaxSpec',
      memUsageUpperThreshold: 'MemUsageUpperThreshold',
      observationWindowSize: 'ObservationWindowSize',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coolDownTime: 'string',
      cpuUsageUpperThreshold: 'number',
      downgrade: 'boolean',
      maxReadOnlyNodes: 'number',
      maxSpec: 'string',
      memUsageUpperThreshold: 'number',
      observationWindowSize: 'string',
      upgrade: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

