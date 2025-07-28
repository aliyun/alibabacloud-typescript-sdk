// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUrgentDemandPlanDetailResponseBodyData extends $dara.Model {
  accountDept?: string;
  /**
   * @example
   * 1065737167271819
   */
  accountId?: string;
  /**
   * @example
   * larus_prd
   */
  accountName?: string;
  /**
   * @example
   * https://xxxxx
   */
  approvalUrl?: string;
  /**
   * @example
   * {}
   */
  bpmSubstate?: { [key: string]: any };
  commodityTypeCodeList?: string[];
  /**
   * @example
   * 262940
   */
  creator?: string;
  /**
   * @example
   * xxx
   */
  creatorName?: string;
  /**
   * @example
   * xxx
   */
  description?: string;
  /**
   * @example
   * URGENT
   */
  detailType?: string;
  /**
   * @example
   * 2021-12-17 16:53:21
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-12-17 16:53:21
   */
  gmtModified?: string;
  /**
   * @example
   * 262940
   */
  modifier?: string;
  /**
   * @example
   * xx
   */
  modifierName?: string;
  /**
   * @example
   * 11223
   */
  planId?: number;
  planName?: string;
  /**
   * @example
   * 220
   */
  status?: number;
  yunzhiProductName?: string;
  static names(): { [key: string]: string } {
    return {
      accountDept: 'accountDept',
      accountId: 'accountId',
      accountName: 'accountName',
      approvalUrl: 'approvalUrl',
      bpmSubstate: 'bpmSubstate',
      commodityTypeCodeList: 'commodityTypeCodeList',
      creator: 'creator',
      creatorName: 'creatorName',
      description: 'description',
      detailType: 'detailType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      modifier: 'modifier',
      modifierName: 'modifierName',
      planId: 'planId',
      planName: 'planName',
      status: 'status',
      yunzhiProductName: 'yunzhiProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDept: 'string',
      accountId: 'string',
      accountName: 'string',
      approvalUrl: 'string',
      bpmSubstate: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      commodityTypeCodeList: { 'type': 'array', 'itemType': 'string' },
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      detailType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifier: 'string',
      modifierName: 'string',
      planId: 'number',
      planName: 'string',
      status: 'number',
      yunzhiProductName: 'string',
    };
  }

  validate() {
    if(this.bpmSubstate) {
      $dara.Model.validateMap(this.bpmSubstate);
    }
    if(Array.isArray(this.commodityTypeCodeList)) {
      $dara.Model.validateArray(this.commodityTypeCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUrgentDemandPlanDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * body
   */
  data?: GetUrgentDemandPlanDetailResponseBodyData;
  /**
   * @example
   * msg
   */
  message?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 1e2b798516402440016572132e1459
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetUrgentDemandPlanDetailResponseBodyData,
      message: 'string',
      success: 'boolean',
      traceId: 'string',
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

