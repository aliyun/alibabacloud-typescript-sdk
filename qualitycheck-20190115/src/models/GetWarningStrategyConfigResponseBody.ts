// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange extends $dara.Model {
  rangeNum?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      rangeNum: 'RangeNum',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rangeNum: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList extends $dara.Model {
  code?: string;
  duration?: number;
  durationExpression?: number;
  hitNumber?: number;
  hitNumberExpression?: number;
  hitRuleList?: string;
  hitType?: number;
  id?: number;
  range?: GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      duration: 'Duration',
      durationExpression: 'DurationExpression',
      hitNumber: 'HitNumber',
      hitNumberExpression: 'HitNumberExpression',
      hitRuleList: 'HitRuleList',
      hitType: 'HitType',
      id: 'Id',
      range: 'Range',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      duration: 'number',
      durationExpression: 'number',
      hitNumber: 'number',
      hitNumberExpression: 'number',
      hitRuleList: 'string',
      hitType: 'number',
      id: 'number',
      range: GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange,
      status: 'number',
    };
  }

  validate() {
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyDataWarningStrategyList extends $dara.Model {
  warningStrategyList?: GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList[];
  static names(): { [key: string]: string } {
    return {
      warningStrategyList: 'warningStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningStrategyList: { 'type': 'array', 'itemType': GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList },
    };
  }

  validate() {
    if(Array.isArray(this.warningStrategyList)) {
      $dara.Model.validateArray(this.warningStrategyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyData extends $dara.Model {
  id?: number;
  intervalTime?: number;
  lambda?: string;
  level?: number;
  maxNumber?: number;
  name?: string;
  warningStrategyList?: GetWarningStrategyConfigResponseBodyDataWarningStrategyList;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      intervalTime: 'IntervalTime',
      lambda: 'Lambda',
      level: 'Level',
      maxNumber: 'MaxNumber',
      name: 'Name',
      warningStrategyList: 'WarningStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      intervalTime: 'number',
      lambda: 'string',
      level: 'number',
      maxNumber: 'number',
      name: 'string',
      warningStrategyList: GetWarningStrategyConfigResponseBodyDataWarningStrategyList,
    };
  }

  validate() {
    if(this.warningStrategyList && typeof (this.warningStrategyList as any).validate === 'function') {
      (this.warningStrategyList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBody extends $dara.Model {
  code?: string;
  data?: GetWarningStrategyConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWarningStrategyConfigResponseBodyData,
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

