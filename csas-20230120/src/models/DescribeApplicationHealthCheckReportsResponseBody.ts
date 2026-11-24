// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationHealthCheckReportsResponseBodyReports extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal-facing application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The list of addresses where health checks failed.
   */
  failedAddresses?: string[];
  /**
   * @remarks
   * The list of regions where health checks failed.
   */
  failedRegions?: string[];
  /**
   * @remarks
   * The number of failed health checks within the query time range.
   * 
   * @example
   * 2
   */
  failureCount?: number;
  /**
   * @remarks
   * The list of reasons for health check failures.
   */
  failureReasons?: string[];
  /**
   * @remarks
   * The status calculated based on the latest check result. Valid values:
   * * normal: The success rate of the latest check is greater than or equal to 95%.
   * * partialError: The success rate of the latest check is greater than 0 and less than 95%.
   * * error: The success rate of the latest check is 0.
   * * uncompleted: No check results are available.
   * 
   * @example
   * normal
   */
  healthCheckStatus?: string;
  /**
   * @remarks
   * The health check mode. Valid values:
   * * OnAccess: on-access check
   * * Continuous: continuous check
   * 
   * @example
   * OnAccess
   */
  mode?: string;
  /**
   * @remarks
   * The number of successful health checks within the query time range.
   * 
   * @example
   * 100
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      failedAddresses: 'FailedAddresses',
      failedRegions: 'FailedRegions',
      failureCount: 'FailureCount',
      failureReasons: 'FailureReasons',
      healthCheckStatus: 'HealthCheckStatus',
      mode: 'Mode',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      failedAddresses: { 'type': 'array', 'itemType': 'string' },
      failedRegions: { 'type': 'array', 'itemType': 'string' },
      failureCount: 'number',
      failureReasons: { 'type': 'array', 'itemType': 'string' },
      healthCheckStatus: 'string',
      mode: 'string',
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedAddresses)) {
      $dara.Model.validateArray(this.failedAddresses);
    }
    if(Array.isArray(this.failedRegions)) {
      $dara.Model.validateArray(this.failedRegions);
    }
    if(Array.isArray(this.failureReasons)) {
      $dara.Model.validateArray(this.failureReasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationHealthCheckReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of health check reports.
   */
  reports?: DescribeApplicationHealthCheckReportsResponseBodyReports[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reports: 'Reports',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reports: { 'type': 'array', 'itemType': DescribeApplicationHealthCheckReportsResponseBodyReports },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reports)) {
      $dara.Model.validateArray(this.reports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

