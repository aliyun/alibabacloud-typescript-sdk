// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators extends $dara.Model {
  aggregatorId?: string;
  errorCode?: string;
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
  operateAggregatorsResult?: DeleteAggregatorsResponseBodyOperateAggregatorsResult;
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

