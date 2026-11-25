// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEvaluateAndImportTaskResponseBodyData extends $dara.Model {
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
   * The summary information.
   * 
   * @example
   * "{\"structureImportResult\":{\"status\":\"finish\",\"finishedNum\":382,\"totalNum\":382,\"percentage\":100},\"switchTips\":\"Forward switchover is allowed only when the forward synchronization latency is low.\",\"autoTableSuggestionSwitch\":false,\"structureAlterationMap\":{},\"acceptFilterMap\":{\"fr_import\":[\"dy_dr_new\"],\"e3plus_drp_prod_new\":[],\"qbtong_prod\":[],\"e3plus_account_prod\":[],\"e3plus_drp_prod\":[]},\"structChunkMap\":{},\"count\":1,\"requestId\":\"9380D025-C9B1-51D6-A4B9-733C4879CC4A\"}",
   */
  context?: string;
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
   * Indicates whether the import task is deleted.
   * 
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @remarks
   * The timestamp when the task was created.
   * 
   * @example
   * 1749394800000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The timestamp when the task was last modified.
   * 
   * @example
   * 1605080537000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the task.
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the destination database.
   * 
   * @example
   * fr_import
   */
  slinkDstDb?: string;
  /**
   * @remarks
   * The destination instance ID.
   * 
   * @example
   * pxc-hzrehc60jz5zye
   */
  slinkDstResId?: string;
  /**
   * @remarks
   * The username for the destination data connection.
   * 
   * @example
   * dts_dtdba
   */
  slinkDstUserName?: string;
  /**
   * @remarks
   * The name of the source database.
   * 
   * @example
   * fr_import
   */
  slinkSrcDb?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * @example
   * drdshbga69378w4p
   */
  slinkSrcResId?: string;
  /**
   * @remarks
   * The source resource type.
   * 
   * @example
   * POLARX1
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
   * The current stage of the synchronization.
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
   * IMPORT_RUNNING
   */
  slinkStatus?: string;
  /**
   * @remarks
   * The description of the slink task.
   * 
   * @example
   * drdsprod_to_2.0
   */
  slinkTaskDesc?: string;
  /**
   * @remarks
   * The ID of the slink task.
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
      context: 'Context',
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
      context: 'string',
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

export class DescribeEvaluateAndImportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeEvaluateAndImportTaskResponseBodyData;
  /**
   * @remarks
   * The message returned by the request. This parameter is empty if the request is successful. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 73559800-****-11ec-bd40-99cfcff3fe1e
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeEvaluateAndImportTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

