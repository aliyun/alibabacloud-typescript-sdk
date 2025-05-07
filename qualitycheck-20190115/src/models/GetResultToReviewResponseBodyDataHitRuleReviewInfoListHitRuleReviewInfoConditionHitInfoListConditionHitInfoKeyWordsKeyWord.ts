// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord extends $dara.Model {
  /**
   * @example
   * 2000
   */
  cid?: string;
  /**
   * @example
   * xxx
   */
  customizeCode?: string;
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 2
   */
  pid?: number;
  /**
   * @example
   * 6fa76916-3ce6-45d8-ac64-01b7f31c7295
   */
  tid?: string;
  /**
   * @example
   * 3
   */
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      customizeCode: 'CustomizeCode',
      from: 'From',
      pid: 'Pid',
      tid: 'Tid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      customizeCode: 'string',
      from: 'number',
      pid: 'number',
      tid: 'string',
      to: 'number',
      val: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

