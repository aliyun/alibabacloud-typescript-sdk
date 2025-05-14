// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue } from "./GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue";


export class GetQualityCheckTaskResultResponseBodyDataQualityCheckList extends $dara.Model {
  bizType?: string;
  checkExplanation?: string;
  /**
   * @example
   * PASSED
   */
  checkPassed?: string;
  checkProcess?: string;
  /**
   * @example
   * HIT
   */
  checked?: string;
  /**
   * @example
   * 2024-05-23 14:57:50
   */
  gmtEnd?: string;
  /**
   * @example
   * 2024-05-23 14:57:50
   */
  gmtStart?: string;
  /**
   * @example
   * 0
   */
  mode?: string;
  originDialogue?: GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue[];
  /**
   * @example
   * warning_customers
   */
  qualityGroupId?: string;
  ruleDescription?: string;
  /**
   * @example
   * wcm_start
   */
  ruleId?: string;
  ruleType?: string;
  subNodeCol?: any[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      checkExplanation: 'checkExplanation',
      checkPassed: 'checkPassed',
      checkProcess: 'checkProcess',
      checked: 'checked',
      gmtEnd: 'gmtEnd',
      gmtStart: 'gmtStart',
      mode: 'mode',
      originDialogue: 'originDialogue',
      qualityGroupId: 'qualityGroupId',
      ruleDescription: 'ruleDescription',
      ruleId: 'ruleId',
      ruleType: 'ruleType',
      subNodeCol: 'subNodeCol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      checkExplanation: 'string',
      checkPassed: 'string',
      checkProcess: 'string',
      checked: 'string',
      gmtEnd: 'string',
      gmtStart: 'string',
      mode: 'string',
      originDialogue: { 'type': 'array', 'itemType': GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue },
      qualityGroupId: 'string',
      ruleDescription: 'string',
      ruleId: 'string',
      ruleType: 'string',
      subNodeCol: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.originDialogue)) {
      $dara.Model.validateArray(this.originDialogue);
    }
    if(Array.isArray(this.subNodeCol)) {
      $dara.Model.validateArray(this.subNodeCol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

