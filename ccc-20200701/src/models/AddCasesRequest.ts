// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddCasesRequestCaseList extends $dara.Model {
  /**
   * @remarks
   * The caller number. If this field is specified, the corresponding contact will be called using this number instead of a randomly selected one.
   * 
   * @example
   * 185022xxxx
   */
  caller?: string;
  /**
   * @remarks
   * Customer-defined custom variables in JSON object format. The object can contain up to 10 properties, and both the name and value of each property are defined by the customer.
   * 
   * @example
   * {"name":"customer","客户标签":"tag"}
   */
  customVariables?: string;
  /**
   * @remarks
   * The desensitized callee number. If this field is not empty, it indicates that the callee number must be desensitized. The desensitization rule is defined by the customer, and only the desensitized callee number needs to be provided here. Using a desensitized callee number means that in certain scenarios, the displayed callee number will be the desensitized version, and the real callee number cannot be viewed.
   * 
   * @example
   * 166******66
   */
  maskedCallee?: string;
  /**
   * @remarks
   * The contact\\"s phone number.
   * 
   * @example
   * 188888****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The business ID, which is an identifier from the customer\\"s operational system used in integration scenarios.
   * 
   * @example
   * 01
   */
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      customVariables: 'CustomVariables',
      maskedCallee: 'MaskedCallee',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class AddCasesRequest extends $dara.Model {
  /**
   * @remarks
   * The predictive outbound call activity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c58b9719-3bc3-441d-a4d3-fc0309ef7066
   */
  campaignId?: string;
  /**
   * @remarks
   * The list of outbound call cases.
   */
  caseList?: AddCasesRequestCaseList[];
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
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      caseList: 'CaseList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      caseList: { 'type': 'array', 'itemType': AddCasesRequestCaseList },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.caseList)) {
      $dara.Model.validateArray(this.caseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

