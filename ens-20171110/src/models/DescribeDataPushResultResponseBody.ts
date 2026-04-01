// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId extends $dara.Model {
  regionId?: string;
  startTime?: string;
  statusDescrip?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      startTime: 'StartTime',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds extends $dara.Model {
  regionId?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId },
    };
  }

  validate() {
    if(Array.isArray(this.regionId)) {
      $dara.Model.validateArray(this.regionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat extends $dara.Model {
  regionIdCount?: number;
  regionIds?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionIdCount: 'RegionIdCount',
      regionIds: 'RegionIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIdCount: 'number',
      regionIds: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds,
      status: 'string',
    };
  }

  validate() {
    if(this.regionIds && typeof (this.regionIds as any).validate === 'function') {
      (this.regionIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS extends $dara.Model {
  statusStat?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat[];
  static names(): { [key: string]: string } {
    return {
      statusStat: 'StatusStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusStat: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat },
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

export class DescribeDataPushResultResponseBodyPushResultsPushResult extends $dara.Model {
  name?: string;
  statusStatS?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      statusStatS: 'StatusStatS',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      statusStatS: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS,
      version: 'string',
    };
  }

  validate() {
    if(this.statusStatS && typeof (this.statusStatS as any).validate === 'function') {
      (this.statusStatS as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResults extends $dara.Model {
  pushResult?: DescribeDataPushResultResponseBodyPushResultsPushResult[];
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResult },
    };
  }

  validate() {
    if(Array.isArray(this.pushResult)) {
      $dara.Model.validateArray(this.pushResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBody extends $dara.Model {
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
  pushResults?: DescribeDataPushResultResponseBodyPushResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pushResults: 'PushResults',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pushResults: DescribeDataPushResultResponseBodyPushResults,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.pushResults && typeof (this.pushResults as any).validate === 'function') {
      (this.pushResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

