// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-6hpdgj7ni6pz1k****
   */
  cenId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * healthcheck_description
   */
  description?: string;
  /**
   * @remarks
   * The time interval at which probe packets are sent during the health check. Unit: seconds.
   * 
   * @example
   * 2
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * Indicates whether probing is enabled. Valid values:
   * 
   * *   **true**: Probing is enabled.
   * 
   *         If you enable probing, the system does not switch to another route if the detected route is not reachable.
   * 
   * *   **false**: Probing is disabled.
   * 
   *           If probing is disabled and a redundant route is specified, the system switches to the redundant route when the detected route is not reachable.
   * 
   * @example
   * false
   */
  healthCheckOnly?: boolean;
  /**
   * @remarks
   * The source IP address of the health check.
   * 
   * @example
   * 172.XX.XX.1
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address of the health check.
   * 
   * @example
   * 192.XX.XX.1
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The number of probe packets that are sent during the health check.
   * 
   * @example
   * 8
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The VBR ID.
   * 
   * @example
   * vbr-bp1kznorjeembsuhl****
   */
  vbrInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the VBR is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  vbrInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      description: 'Description',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckOnly: 'HealthCheckOnly',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      healthyThreshold: 'HealthyThreshold',
      vbrInstanceId: 'VbrInstanceId',
      vbrInstanceRegionId: 'VbrInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      description: 'string',
      healthCheckInterval: 'number',
      healthCheckOnly: 'boolean',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      healthyThreshold: 'number',
      vbrInstanceId: 'string',
      vbrInstanceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

