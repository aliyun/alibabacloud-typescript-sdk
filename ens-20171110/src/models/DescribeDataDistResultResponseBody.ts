// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * i-5qzje8f5un1wmi341m2yetaxv
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time of the distribution. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-19T07:24:52Z
   */
  startTime?: string;
  /**
   * @remarks
   * The description of the distribution status.
   * 
   * @example
   * SUCCESS
   */
  statusDescrip?: string;
  /**
   * @remarks
   * The time when the distribution status was last updated. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-11T02:38:19Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'string',
      statusDescrip: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances extends $dara.Model {
  instance?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat extends $dara.Model {
  /**
   * @remarks
   * The number of associated edge instances.
   * 
   * @example
   * 10
   */
  instanceCount?: string;
  /**
   * @remarks
   * The distribution status of the edge instance.
   */
  instances?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances;
  /**
   * @remarks
   * The distribution status. The value is of the enumeration type. Valid values:
   * 
   * *   SUCCESS: The distribution is successful.
   * *   FAILED: The distribution failed.
   * *   DISTING: The data is being distributed.
   * *   POD_RESTARTING: The idle pod is being restarted.
   * *   DELETED: The data is cleared or removed.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      instances: 'Instances',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'string',
      instances: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances,
      status: 'string',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats extends $dara.Model {
  statusStat?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat[];
  static names(): { [key: string]: string } {
    return {
      statusStat: 'StatusStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusStat: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat },
    };
  }

  validate() {
    if(Array.isArray(this.statusStat)) {
      $dara.Model.validateArray(this.statusStat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResult extends $dara.Model {
  /**
   * @remarks
   * The name of the data file.
   * 
   * @example
   * gcs-prod-websocket-eip-unicom
   */
  name?: string;
  /**
   * @remarks
   * The distribution status statistics.
   */
  statusStats?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats;
  /**
   * @remarks
   * The version number of the data file.
   * 
   * @example
   * standard
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      statusStats: 'StatusStats',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      statusStats: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats,
      version: 'string',
    };
  }

  validate() {
    if(this.statusStats && typeof (this.statusStats as any).validate === 'function') {
      (this.statusStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResults extends $dara.Model {
  distResult?: DescribeDataDistResultResponseBodyDistResultsDistResult[];
  static names(): { [key: string]: string } {
    return {
      distResult: 'DistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResult: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResult },
    };
  }

  validate() {
    if(Array.isArray(this.distResult)) {
      $dara.Model.validateArray(this.distResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The distribution status of data files on edge instances.
   */
  distResults?: DescribeDataDistResultResponseBodyDistResults;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50373E71-7710-4620-8AAB-133CCE49451C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      distResults: 'DistResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResults: DescribeDataDistResultResponseBodyDistResults,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.distResults && typeof (this.distResults as any).validate === 'function') {
      (this.distResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

