// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEvaluateAndImportTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 26842
   */
  bid?: string;
  context?: string;
  /**
   * @example
   * 346650
   */
  creator?: string;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @example
   * 2025-06-08T15:00Z
   */
  gmtCreated?: number;
  /**
   * @example
   * 1605080537000
   */
  gmtModified?: number;
  /**
   * @example
   * 76251
   */
  id?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * fr_import
   */
  slinkDstDb?: string;
  /**
   * @example
   * pxc-hzrehc60jz5zye
   */
  slinkDstResId?: string;
  /**
   * @example
   * dts_dtdba
   */
  slinkDstUserName?: string;
  /**
   * @example
   * fr_import
   */
  slinkSrcDb?: string;
  /**
   * @example
   * drdshbga69378w4p
   */
  slinkSrcResId?: string;
  /**
   * @example
   * POLARX1
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
   * IMPORT_RUNNING
   */
  slinkStatus?: string;
  /**
   * @example
   * drdsprod_to_2.0
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
  data?: DescribeEvaluateAndImportTaskResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 73559800-****-11ec-bd40-99cfcff3fe1e
   */
  requestId?: string;
  /**
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

