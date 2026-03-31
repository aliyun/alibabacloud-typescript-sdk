// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-dacf86d8314e00eb****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * > No error code is returned for the account group if the account group is deleted.
   * 
   * @example
   * AccountNotExisted
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregatorsResponseBodyOperateAggregatorsResult extends $dara.Model {
  /**
   * @remarks
   * The details of the account group.
   */
  operateAggregators?: DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators[];
  static names(): { [key: string]: string } {
    return {
      operateAggregators: 'OperateAggregators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateAggregators: { 'type': 'array', 'itemType': DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators },
    };
  }

  validate() {
    if(Array.isArray(this.operateAggregators)) {
      $dara.Model.validateArray(this.operateAggregators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregatorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  operateAggregatorsResult?: DeleteAggregatorsResponseBodyOperateAggregatorsResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8195B664-9565-4685-89AC-8B5F04B44B92
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateAggregatorsResult: 'OperateAggregatorsResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateAggregatorsResult: DeleteAggregatorsResponseBodyOperateAggregatorsResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.operateAggregatorsResult && typeof (this.operateAggregatorsResult as any).validate === 'function') {
      (this.operateAggregatorsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

