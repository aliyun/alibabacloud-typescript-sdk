// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords extends $dara.Model {
  /**
   * @example
   * 4
   */
  cid?: string;
  customizeCode?: string;
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 123
   */
  oid?: string;
  operatorKey?: string;
  /**
   * @example
   * 13
   */
  pid?: number;
  similarPhrase?: string;
  tid?: string;
  /**
   * @example
   * 3
   */
  to?: number;
  uuid?: string;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      customizeCode: 'CustomizeCode',
      from: 'From',
      oid: 'Oid',
      operatorKey: 'OperatorKey',
      pid: 'Pid',
      similarPhrase: 'SimilarPhrase',
      tid: 'Tid',
      to: 'To',
      uuid: 'Uuid',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      customizeCode: 'string',
      from: 'number',
      oid: 'string',
      operatorKey: 'string',
      pid: 'number',
      similarPhrase: 'string',
      tid: 'string',
      to: 'number',
      uuid: 'string',
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

