// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppendCasesRequestBody extends $dara.Model {
  /**
   * @remarks
   * The agent ID of the specified agent to which the call is transferred. If this field is not empty, the system transfers the call to the specified agent. If this field is empty, the system assigns the call to an idle agent in the skill group.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * The caller number. If this field is not empty, the outbound call system preferentially uses the provided number as the caller to initiate the call. If this field is empty, the system automatically selects a caller number.
   * 
   * @example
   * 01012345678
   */
  caller?: string;
  /**
   * @remarks
   * The custom variables defined by the customer. The value is a JSON object that contains up to 10 properties. The name and value of each property are defined by the customer.
   * 
   * @example
   * {
   *       "name": "customer",
   *       "Customer tag": "tag"
   * }
   */
  customVariables?: string;
  /**
   * @remarks
   * The masked callee number. If this field is not empty, the callee number is masked based on custom rules defined by the customer. You only need to enter the masked callee number. If a masked callee number is used, the masked number is displayed in certain scenarios, and the actual callee number cannot be viewed.
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
   * The business ID, which is the identifier in the customer\\"s business system and is used for integration scenarios.
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
   * The predictive outbound campaign ID.
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
   * The list of outbound call cases in the request body.
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

