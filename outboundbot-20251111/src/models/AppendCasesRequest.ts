// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AppendCasesRequestCases extends $dara.Model {
  /**
   * @remarks
   * The custom variables defined by the customer. The value is a JSON object that contains up to 10 properties. The name and value of each property are defined by the customer.
   * 
   * @example
   * ["key1":"value1"]
   */
  customVariables?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * @example
   * 1331234****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The business system ID of the contact.
   * 
   * @example
   * business3-watermark-2704-1776997551
   */
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      customVariables: 'CustomVariables',
      phoneNumber: 'PhoneNumber',
      priority: 'Priority',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customVariables: 'string',
      phoneNumber: 'string',
      priority: 'number',
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
   * The outbound call task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 40ea7fc2-c9d4-47e3-af1e-216bf7f79a44
   */
  campaignId?: string;
  /**
   * @remarks
   * The list of contacts.
   * 
   * This parameter is required.
   */
  cases?: AppendCasesRequestCases[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      cases: 'Cases',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      cases: { 'type': 'array', 'itemType': AppendCasesRequestCases },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cases)) {
      $dara.Model.validateArray(this.cases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

