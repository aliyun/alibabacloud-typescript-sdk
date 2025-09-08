// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail extends $dara.Model {
  /**
   * @remarks
   * The number of ACUs for the elastic resources.
   * 
   * @example
   * 16ACU
   */
  elasticAcuNumber?: number;
  /**
   * @remarks
   * The number of ACUs for the reserved resources.
   * 
   * @example
   * 16ACU
   */
  reservedAcuNumber?: number;
  /**
   * @remarks
   * The number of spot ACUs.
   * 
   * @example
   * 16ACU
   */
  spotAcuNumber?: number;
  /**
   * @remarks
   * The percent of spot ACUs.
   * 
   * @example
   * 0.9
   */
  spotAcuPercentage?: number;
  /**
   * @remarks
   * The total number of ACUs.
   * 
   * @example
   * 32ACU
   */
  totalAcuNumber?: number;
  static names(): { [key: string]: string } {
    return {
      elasticAcuNumber: 'ElasticAcuNumber',
      reservedAcuNumber: 'ReservedAcuNumber',
      spotAcuNumber: 'SpotAcuNumber',
      spotAcuPercentage: 'SpotAcuPercentage',
      totalAcuNumber: 'TotalAcuNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcuNumber: 'number',
      reservedAcuNumber: 'number',
      spotAcuNumber: 'number',
      spotAcuPercentage: 'number',
      totalAcuNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResourceUsageResponseBodyDataJobAcuUsage extends $dara.Model {
  /**
   * @remarks
   * The ACU usage.
   */
  acuUsageDetail?: DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail;
  /**
   * @remarks
   * The end time of the job. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-23T16:00:00Z
   */
  jobEndTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1592
   */
  jobId?: string;
  /**
   * @remarks
   * The start time of the job. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  jobStartTime?: string;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * @example
   * job_default
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      acuUsageDetail: 'AcuUsageDetail',
      jobEndTime: 'JobEndTime',
      jobId: 'JobId',
      jobStartTime: 'JobStartTime',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuUsageDetail: DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail,
      jobEndTime: 'string',
      jobId: 'string',
      jobStartTime: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    if(this.acuUsageDetail && typeof (this.acuUsageDetail as any).validate === 'function') {
      (this.acuUsageDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResourceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-23T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The AnalyticDB compute unit (ACU) usage of the job resource group.
   */
  jobAcuUsage?: DescribeJobResourceUsageResponseBodyDataJobAcuUsage[];
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  startTime?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      jobAcuUsage: 'JobAcuUsage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      jobAcuUsage: { 'type': 'array', 'itemType': DescribeJobResourceUsageResponseBodyDataJobAcuUsage },
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobAcuUsage)) {
      $dara.Model.validateArray(this.jobAcuUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried resource usage.
   */
  data?: DescribeJobResourceUsageResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeJobResourceUsageResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

