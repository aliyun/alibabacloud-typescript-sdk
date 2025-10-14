// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEvaluateAndImportTasksResponseBodyData extends $dara.Model {
  /**
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @example
   * 346650
   */
  creator?: string;
  /**
   * @example
   * fase
   */
  deleted?: boolean;
  /**
   * @example
   * 2025-01-08T15:00Z
   */
  gmtCreated?: number;
  /**
   * @example
   * 2025-04-02T02:10:59Z
   */
  gmtModified?: number;
  /**
   * @example
   * ap-northeast-1
   */
  id?: number;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @example
   * e3plus_*****_prod
   */
  slinkDstDb?: string;
  /**
   * @example
   * pxc-hzrehc****5zye
   */
  slinkDstResId?: string;
  /**
   * @example
   * dts_temp_2_23
   */
  slinkDstUserName?: string;
  /**
   * @example
   * stock
   */
  slinkSrcDb?: string;
  /**
   * @example
   * drdshbga*****w4p
   */
  slinkSrcResId?: string;
  /**
   * @example
   * RDS_MYSQL
   */
  slinkSrcResType?: string;
  /**
   * @example
   * dtdba
   */
  slinkSrcUserName?: string;
  /**
   * @example
   * DATA_IMPORT_RUNNING
   */
  slinkStage?: string;
  /**
   * @example
   * IMPORT_NOT_BEGIN
   */
  slinkStatus?: string;
  /**
   * @example
   * test
   */
  slinkTaskDesc?: string;
  /**
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  /**
   * @example
   * evaluate_import
   */
  slinkType?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      creator: 'Creator',
      deleted: 'Deleted',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      regionId: 'RegionId',
      slinkDstDb: 'SlinkDstDb',
      slinkDstResId: 'SlinkDstResId',
      slinkDstUserName: 'SlinkDstUserName',
      slinkSrcDb: 'SlinkSrcDb',
      slinkSrcResId: 'SlinkSrcResId',
      slinkSrcResType: 'SlinkSrcResType',
      slinkSrcUserName: 'SlinkSrcUserName',
      slinkStage: 'SlinkStage',
      slinkStatus: 'SlinkStatus',
      slinkTaskDesc: 'SlinkTaskDesc',
      slinkTaskId: 'SlinkTaskId',
      slinkType: 'SlinkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      creator: 'string',
      deleted: 'boolean',
      gmtCreated: 'number',
      gmtModified: 'number',
      id: 'number',
      regionId: 'string',
      slinkDstDb: 'string',
      slinkDstResId: 'string',
      slinkDstUserName: 'string',
      slinkSrcDb: 'string',
      slinkSrcResId: 'string',
      slinkSrcResType: 'string',
      slinkSrcUserName: 'string',
      slinkStage: 'string',
      slinkStatus: 'string',
      slinkTaskDesc: 'string',
      slinkTaskId: 'string',
      slinkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateAndImportTasksResponseBody extends $dara.Model {
  data?: DescribeEvaluateAndImportTasksResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 0
   */
  pageSize?: number;
  /**
   * @example
   * 81519FDE-713B-****-B6F1-231479A4C9DB
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 0
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeEvaluateAndImportTasksResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

