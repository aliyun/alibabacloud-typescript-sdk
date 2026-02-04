// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallRequest extends $dara.Model {
  /**
   * @example
   * P20210208152920000001
   */
  bizId?: string;
  /**
   * @example
   * esp.companyreg_cloud
   */
  bizType?: string;
  /**
   * @example
   * 13518132662
   */
  callerNumber?: string;
  /**
   * @example
   * xinxuan
   */
  productCode?: string;
  /**
   * @example
   * {\\"prompt\\":\\"{\\\\\\"accountId\\\\\\":\\\\\\"03D31F61DD6512D23F5789A439CE4CA2\\\\\\",\\\\\\"conversationId\\\\\\":\\\\\\"K7nBeth9\\\\\\"}\\"}
   */
  promptParam?: string;
  /**
   * @example
   * robotcall_001
   */
  scenesCode?: string;
  /**
   * @example
   * 1
   */
  skillType?: number;
  startWordParam?: string;
  /**
   * @example
   * msea
   */
  tenantCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      callerNumber: 'CallerNumber',
      productCode: 'ProductCode',
      promptParam: 'PromptParam',
      scenesCode: 'ScenesCode',
      skillType: 'SkillType',
      startWordParam: 'StartWordParam',
      tenantCode: 'TenantCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      callerNumber: 'string',
      productCode: 'string',
      promptParam: 'string',
      scenesCode: 'string',
      skillType: 'number',
      startWordParam: 'string',
      tenantCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

