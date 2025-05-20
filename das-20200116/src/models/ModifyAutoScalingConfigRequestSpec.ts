// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoScalingConfigRequestSpec extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to apply the **Spec** configuration of the specification auto scaling feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * The quiescent period. The value of this parameter consists of a numeric value and a time unit suffix. The **m** time unit suffix specifies the minute, the **h** time unit suffix specifies the hour, and the **d** time unit suffix specifies the day.
   * 
   * *   Valid values for PolarDB for MySQL Cluster Edition instances: **5m**, **10m**, **30m**, **1h**, **2h**, **3h**, **1d**, and **7d**.
   * *   Valid values for ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or Enterprise SSDs (ESSDs): **5m**, **10m**, **30m**, **1h**, **2h**, **3h**, **1d**, and **7d**.
   * 
   * @example
   * 5m
   * 
   * **if can be null:**
   * true
   */
  coolDownTime?: string;
  /**
   * @remarks
   * The average CPU utilization threshold that triggers automatic specification scale-up. Unit: %. Valid values:
   * 
   * *   **50**
   * *   **60**
   * *   **70**
   * *   **80**
   * *   **90**
   * 
   * >  This parameter must be specified if the database instance is a PolarDB for MySQL Cluster Edition instance or an ApsaraDB RDS for MySQL High-availability Edition instance that uses standard SSDs or ESSDs.
   * 
   * @example
   * 70
   * 
   * **if can be null:**
   * true
   */
  cpuUsageUpperThreshold?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic specification scale-down. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter must be specified if the database instance is a PolarDB for MySQL Cluster Edition instance or an ApsaraDB RDS for MySQL High-availability Edition instance that uses standard SSDs or ESSDs.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  downgrade?: boolean;
  /**
   * @remarks
   * The maximum number of read-only nodes of the instance.
   * 
   * >  This parameter must be specified if the database instance is a PolarDB for MySQL Cluster Edition instance.
   * 
   * @example
   * 10
   * 
   * **if can be null:**
   * true
   */
  maxReadOnlyNodes?: number;
  /**
   * @remarks
   * The maximum specifications to which the database instance can be scaled up. The database instance can be upgraded only to a database instance of the same edition with higher specifications. For information about the specifications of different database instances, see the following topics:
   * 
   * *   PolarDB for MySQL Cluster Edition instances: [Specifications of compute nodes](https://help.aliyun.com/document_detail/102542.html)
   * *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs: [Specifications](https://help.aliyun.com/document_detail/276974.html)
   * 
   * @example
   * polar.mysql.x8.12xlarge
   * 
   * **if can be null:**
   * true
   */
  maxSpec?: string;
  /**
   * @remarks
   * The average memory usage threshold that triggers automatic specification scale-up. Unit: %. Valid values:
   * 
   * *   **50**
   * *   **60**
   * *   **70**
   * *   **80**
   * *   **90**
   * 
   * >  This parameter must be specified if the database instance is a Tair (Redis OSS-compatible) Community Edition cloud-native instance on the China site (aliyun.com).
   * 
   * @example
   * 70
   * 
   * **if can be null:**
   * true
   */
  memUsageUpperThreshold?: number;
  /**
   * @remarks
   * The observation window. The value of this parameter consists of a numeric value and a time unit suffix. The **m** time unit suffix specifies the minute and the **h** time unit suffix specifies the hour.
   * 
   * *   Valid values for PolarDB for MySQL Cluster Edition instances: **5m**, **10m**, **15m**, and **30m**.
   * *   Valid values for ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs: **5m**, **20m**, **30m**, **40m**, and **1h**.
   * *   Valid values for Tair (Redis OSS-compatible) Community Edition cloud-native instances: **5m**, **10m**, **15m**, and **30m**.
   * 
   * @example
   * 5m
   * 
   * **if can be null:**
   * true
   */
  observationWindowSize?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic specification scale-up. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
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
      apply: 'boolean',
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

