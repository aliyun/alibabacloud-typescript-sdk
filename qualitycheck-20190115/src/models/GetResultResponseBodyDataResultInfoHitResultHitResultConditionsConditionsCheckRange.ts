// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeAnchor } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeAnchor";
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeRange } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeRange";
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeTimeRange } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeTimeRange";


export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange extends $dara.Model {
  /**
   * @remarks
   * false: 相对位置; 会结合anchor以及角色来决定句子位置
   */
  absolute?: boolean;
  /**
   * @remarks
   * true: 每句话都必须满足条件；
   */
  allSentencesSatisfy?: boolean;
  /**
   * @remarks
   * 前置后置条件
   */
  anchor?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeAnchor;
  /**
   * @remarks
   * 相对范围
   */
  range?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeRange;
  /**
   * @remarks
   * 对应 RoleType.type
   */
  role?: string;
  /**
   * @remarks
   * 对应 RoleType.id
   */
  roleId?: number;
  timeRange?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeTimeRange;
  static names(): { [key: string]: string } {
    return {
      absolute: 'Absolute',
      allSentencesSatisfy: 'AllSentencesSatisfy',
      anchor: 'Anchor',
      range: 'Range',
      role: 'Role',
      roleId: 'RoleId',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolute: 'boolean',
      allSentencesSatisfy: 'boolean',
      anchor: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeAnchor,
      range: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeRange,
      role: 'string',
      roleId: 'number',
      timeRange: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeTimeRange,
    };
  }

  validate() {
    if(this.anchor && typeof (this.anchor as any).validate === 'function') {
      (this.anchor as any).validate();
    }
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

