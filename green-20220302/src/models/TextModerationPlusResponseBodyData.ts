// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TextModerationPlusResponseBodyDataAdvice } from "./TextModerationPlusResponseBodyDataAdvice";
import { TextModerationPlusResponseBodyDataAttackResult } from "./TextModerationPlusResponseBodyDataAttackResult";
import { TextModerationPlusResponseBodyDataResult } from "./TextModerationPlusResponseBodyDataResult";
import { TextModerationPlusResponseBodyDataSensitiveResult } from "./TextModerationPlusResponseBodyDataSensitiveResult";


export class TextModerationPlusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The suggestion.
   */
  advice?: TextModerationPlusResponseBodyDataAdvice[];
  /**
   * @remarks
   * The level of prompt attack
   * 
   * @example
   * none
   */
  attackLevel?: string;
  /**
   * @remarks
   * The result of prompt attack detect
   */
  attackResult?: TextModerationPlusResponseBodyDataAttackResult[];
  /**
   * @remarks
   * The id of data
   * 
   * @example
   * text1234
   */
  dataId?: string;
  manualTaskId?: string;
  /**
   * @remarks
   * The results.
   */
  result?: TextModerationPlusResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * The level of sensitivity data
   * 
   * @example
   * S0
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The result of sensitivity data detect
   */
  sensitiveResult?: TextModerationPlusResponseBodyDataSensitiveResult[];
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      attackLevel: 'AttackLevel',
      attackResult: 'AttackResult',
      dataId: 'DataId',
      manualTaskId: 'ManualTaskId',
      result: 'Result',
      riskLevel: 'RiskLevel',
      score: 'Score',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveResult: 'SensitiveResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataAdvice },
      attackLevel: 'string',
      attackResult: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataAttackResult },
      dataId: 'string',
      manualTaskId: 'string',
      result: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResult },
      riskLevel: 'string',
      score: 'number',
      sensitiveLevel: 'string',
      sensitiveResult: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataSensitiveResult },
    };
  }

  validate() {
    if(Array.isArray(this.advice)) {
      $dara.Model.validateArray(this.advice);
    }
    if(Array.isArray(this.attackResult)) {
      $dara.Model.validateArray(this.attackResult);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.sensitiveResult)) {
      $dara.Model.validateArray(this.sensitiveResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

