// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus extends $dara.Model {
  cpuUtilization?: number;
  dedicatedClusterId?: string;
  dedicatedClusterName?: string;
  diskUtilization?: number;
  dtsInstanceID?: string;
  du?: number;
  duUtilization?: number;
  gmtCreated?: number;
  memUtilization?: number;
  nodeCount?: number;
  oversoldDu?: number;
  regionId?: string;
  state?: string;
  totalCpuCore?: number;
  totalDiskGBSize?: number;
  totalMemGBSize?: number;
  usedCpuCore?: number;
  usedDiskGBSize?: number;
  usedDu?: number;
  usedMemGBSize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuUtilization: 'CpuUtilization',
      dedicatedClusterId: 'DedicatedClusterId',
      dedicatedClusterName: 'DedicatedClusterName',
      diskUtilization: 'DiskUtilization',
      dtsInstanceID: 'DtsInstanceID',
      du: 'Du',
      duUtilization: 'DuUtilization',
      gmtCreated: 'GmtCreated',
      memUtilization: 'MemUtilization',
      nodeCount: 'NodeCount',
      oversoldDu: 'OversoldDu',
      regionId: 'RegionId',
      state: 'State',
      totalCpuCore: 'TotalCpuCore',
      totalDiskGBSize: 'TotalDiskGBSize',
      totalMemGBSize: 'TotalMemGBSize',
      usedCpuCore: 'UsedCpuCore',
      usedDiskGBSize: 'UsedDiskGBSize',
      usedDu: 'UsedDu',
      usedMemGBSize: 'UsedMemGBSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUtilization: 'number',
      dedicatedClusterId: 'string',
      dedicatedClusterName: 'string',
      diskUtilization: 'number',
      dtsInstanceID: 'string',
      du: 'number',
      duUtilization: 'number',
      gmtCreated: 'number',
      memUtilization: 'number',
      nodeCount: 'number',
      oversoldDu: 'number',
      regionId: 'string',
      state: 'string',
      totalCpuCore: 'number',
      totalDiskGBSize: 'number',
      totalMemGBSize: 'number',
      usedCpuCore: 'number',
      usedDiskGBSize: 'number',
      usedDu: 'number',
      usedMemGBSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedClusterResponseBodyDedicatedClusterStatusList extends $dara.Model {
  dedicatedClusterStatus?: ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus[];
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterStatus: 'DedicatedClusterStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterStatus: { 'type': 'array', 'itemType': ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedClusterStatus)) {
      $dara.Model.validateArray(this.dedicatedClusterStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedClusterResponseBody extends $dara.Model {
  dedicatedClusterStatusList?: ListDedicatedClusterResponseBodyDedicatedClusterStatusList;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The page number of the returned page. The value must be an integer that is greater than 0. Default value: 1.
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
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of clusters that meet the query condition.
   * 
   * @example
   * 15
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterStatusList: 'DedicatedClusterStatusList',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterStatusList: ListDedicatedClusterResponseBodyDedicatedClusterStatusList,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.dedicatedClusterStatusList && typeof (this.dedicatedClusterStatusList as any).validate === 'function') {
      (this.dedicatedClusterStatusList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

