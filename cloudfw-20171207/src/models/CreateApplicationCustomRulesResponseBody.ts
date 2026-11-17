// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationCustomRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of IDs for the newly created custom application rules. The order of the IDs corresponds to the order of the rules in the Rules request parameter.
   */
  applicationCustomRuleIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCustomRuleIds: 'ApplicationCustomRuleIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCustomRuleIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationCustomRuleIds)) {
      $dara.Model.validateArray(this.applicationCustomRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

