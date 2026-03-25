// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck extends $dara.Model {
  cenId?: string;
  description?: string;
  healthCheckInterval?: number;
  healthCheckOnly?: boolean;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  healthyThreshold?: number;
  vbrInstanceId?: string;
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

