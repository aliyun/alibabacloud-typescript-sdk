// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail extends $dara.Model {
  /**
   * @remarks
   * The number of elastic ACU resources.
   * 
   * @example
   * 16ACU
   */
  elasticAcuNumber?: number;
  /**
   * @remarks
   * The number of reserved ACU resources.
   * 
   * @example
   * 16ACU
   */
  reservedAcuNumber?: number;
  /**
   * @remarks
   * The number of spot instance ACU resources.
   * 
   * @example
   * 16ACU
   */
  spotAcuNumber?: number;
  /**
   * @remarks
   * The percentage of spot instance resources in the total elastic resources.
   * 
   * @example
   * 0.9
   */
  spotAcuPercentage?: number;
  /**
   * @remarks
   * The total number of ACU resources.
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
   * The ACU resource usage details.
   */
  acuUsageDetail?: DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail;
  /**
   * @remarks
   * The end time of the job. Format: yyyy-MM-ddTHH:mmZ (UTC).
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
   * The start time of the job. Format: yyyy-MM-ddTHH:mmZ (UTC).
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
  sparkAppName?: string;
  /**
   * @remarks
   * Indicates whether the hot pool is used.
   * 
   * @example
   * false
   */
  useCachePool?: boolean;
  static names(): { [key: string]: string } {
    return {
      acuUsageDetail: 'AcuUsageDetail',
      jobEndTime: 'JobEndTime',
      jobId: 'JobId',
      jobStartTime: 'JobStartTime',
      resourceGroupName: 'ResourceGroupName',
      sparkAppName: 'SparkAppName',
      useCachePool: 'UseCachePool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuUsageDetail: DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail,
      jobEndTime: 'string',
      jobId: 'string',
      jobStartTime: 'string',
      resourceGroupName: 'string',
      sparkAppName: 'string',
      useCachePool: 'boolean',
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
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time. Format: yyyy-MM-ddTHH:mmZ (UTC).
   * 
   * @example
   * 2023-05-23T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ACU usage of the job resource group.
   */
  jobAcuUsage?: DescribeJobResourceUsageResponseBodyDataJobAcuUsage[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time. Format: yyyy-MM-ddTHH:mmZ (UTC).
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
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
   * The API status or POP error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
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

