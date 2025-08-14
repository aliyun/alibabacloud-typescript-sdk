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

export class DescribeCenVbrHealthCheckResponseBodyVbrHealthChecks extends $dara.Model {
  vbrHealthCheck?: DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck[];
  static names(): { [key: string]: string } {
    return {
      vbrHealthCheck: 'VbrHealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vbrHealthCheck: { 'type': 'array', 'itemType': DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck },
    };
  }

  validate() {
    if(Array.isArray(this.vbrHealthCheck)) {
      $dara.Model.validateArray(this.vbrHealthCheck);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenVbrHealthCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8C9702E-304A-4E18-AC89-BE2D91C2C176
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The health check configuration of the VBR.
   */
  vbrHealthChecks?: DescribeCenVbrHealthCheckResponseBodyVbrHealthChecks;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vbrHealthChecks: 'VbrHealthChecks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vbrHealthChecks: DescribeCenVbrHealthCheckResponseBodyVbrHealthChecks,
    };
  }

  validate() {
    if(this.vbrHealthChecks && typeof (this.vbrHealthChecks as any).validate === 'function') {
      (this.vbrHealthChecks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

