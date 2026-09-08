// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppendCasesRequestBody extends $dara.Model {
  /**
   * @remarks
   * The agent ID. If you specify this parameter, the system routes the call to the specified agent. If you leave this parameter empty, the system routes the call to an idle agent in the skill group.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * The caller number. If you specify this parameter, the system preferentially uses the specified number to initiate a call. If you leave this parameter empty, the system automatically selects a number to initiate a call.
   * 
   * @example
   * 01012345678
   */
  caller?: string;
  /**
   * @remarks
   * Custom variables in the format of a JSON object. The object can contain up to 10 properties, and the name and value of each property are custom.
   * 
   * @example
   * {
   *       "name": "customer",
   *       "客户标签": "tag"
   * }
   */
  customVariables?: string;
  /**
   * @remarks
   * The masked callee number. If this parameter is not empty, the callee number will be masked. You can define the masking rule and specify the masked callee number. In some cases, you can only view the masked callee number instead of the real one.
   * 
   * @example
   * 071*****801
   */
  maskedCallee?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * @example
   * 188888****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The business ID, which is a custom ID from your business system, used for integration purposes.
   * 
   * @example
   * 01
   */
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      caller: 'Caller',
      customVariables: 'CustomVariables',
      maskedCallee: 'MaskedCallee',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      caller: 'string',
      customVariables: 'string',
      maskedCallee: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendCasesRequest extends $dara.Model {
  /**
   * @remarks
   * The predictive campaign ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 78cf6864-9a22-4ea8-a59d-5adc2d747b0e
   */
  campaignId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of cases to be added.
   */
  body?: AppendCasesRequestBody[];
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      body: { 'type': 'array', 'itemType': AppendCasesRequestBody },
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

