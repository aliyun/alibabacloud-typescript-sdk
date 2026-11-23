// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEvaluateAndImportTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business ID of the import task.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The creator of the import task.
   * 
   * @example
   * 346650
   */
  creator?: string;
  /**
   * @remarks
   * Specifies whether the task is deleted.
   * 
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @remarks
   * The timestamp when the task was created. Unit: milliseconds.
   * 
   * @example
   * 1736348400000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The time when the metadata was modified.
   * 
   * @example
   * 1743559859000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 76251
   */
  id?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the destination Slink database.
   * 
   * @example
   * e3plus_*****_prod
   */
  slinkDstDb?: string;
  /**
   * @remarks
   * The destination instance ID.
   * 
   * @example
   * pxc-hzrehc****5zye
   */
  slinkDstResId?: string;
  /**
   * @remarks
   * The username for the destination data connection.
   * 
   * @example
   * dts_temp_2_23
   */
  slinkDstUserName?: string;
  /**
   * @remarks
   * The name of the source Slink database.
   * 
   * @example
   * stock
   */
  slinkSrcDb?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * @example
   * drdshbga*****w4p
   */
  slinkSrcResId?: string;
  /**
   * @remarks
   * The type of the source resource.
   * 
   * @example
   * RDS_MYSQL
   */
  slinkSrcResType?: string;
  /**
   * @remarks
   * The username for the source data connection.
   * 
   * @example
   * dtdba
   */
  slinkSrcUserName?: string;
  /**
   * @remarks
   * The stage of the synchronization.
   * 
   * @example
   * DATA_IMPORT_RUNNING
   */
  slinkStage?: string;
  /**
   * @remarks
   * The running status of the synchronization.
   * 
   * @example
   * IMPORT_NOT_BEGIN
   */
  slinkStatus?: string;
  /**
   * @remarks
   * The description of the Slink task.
   * 
   * @example
   * test
   */
  slinkTaskDesc?: string;
  /**
   * @remarks
   * The Slink task ID.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  /**
   * @remarks
   * The synchronization type.
   * 
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
  /**
   * @remarks
   * The recovery task details.
   */
  data?: DescribeEvaluateAndImportTasksResponseBodyData[];
  /**
   * @remarks
   * The returned message. > This parameter is empty if the request is successful. If the request fails, an error message (such as an error code) is returned.
   * 
   * @example
   * success
   */
  message?: string;
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
   * 0
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 81519FDE-713B-****-B6F1-231479A4C9DB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
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

