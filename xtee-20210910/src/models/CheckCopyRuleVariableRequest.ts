// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCopyRuleVariableRequest extends $dara.Model {
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Source policy ID
   * 
   * @example
   * 102125
   */
  sourceRuleId?: string;
  /**
   * @remarks
   * Source policy IDs
   * 
   * @example
   * 02125,102129
   */
  sourceRuleIds?: string;
  /**
   * @remarks
   * Target event
   * 
   * @example
   * de_ajtshf1581
   */
  targetEventCode?: string;
  static names(): { [key: string]: string } {
    return {
      createType: 'CreateType',
      lang: 'Lang',
      regId: 'RegId',
      sourceRuleId: 'SourceRuleId',
      sourceRuleIds: 'SourceRuleIds',
      targetEventCode: 'TargetEventCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createType: 'string',
      lang: 'string',
      regId: 'string',
      sourceRuleId: 'string',
      sourceRuleIds: 'string',
      targetEventCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

