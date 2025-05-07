// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange } from "./GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange";


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

