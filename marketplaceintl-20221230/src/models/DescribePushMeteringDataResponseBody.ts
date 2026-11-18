// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribePushMeteringDataResponseBodyResult extends $dara.Model {
  endTime?: number;
  instanceId?: string;
  isPushBilling?: boolean;
  meteringAssist?: string;
  meteringEntity?: string;
  pushOrderBizId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      isPushBilling: 'IsPushBilling',
      meteringAssist: 'MeteringAssist',
      meteringEntity: 'MeteringEntity',
      pushOrderBizId: 'PushOrderBizId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      isPushBilling: 'boolean',
      meteringAssist: 'string',
      meteringEntity: 'string',
      pushOrderBizId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePushMeteringDataResponseBody extends $dara.Model {
  code?: string;
  dynamicMessage?: string;
  forceFatal?: boolean;
  message?: string;
  requestId?: string;
  result?: DescribePushMeteringDataResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      forceFatal: 'ForceFatal',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
      forceFatal: 'boolean',
      message: 'string',
      requestId: 'string',
      result: DescribePushMeteringDataResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

