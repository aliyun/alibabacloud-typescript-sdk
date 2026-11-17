// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebFilterRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The list of IDs of the newly created web filtering rules. The order of the IDs corresponds one-to-one with the order of the input Rules parameter.
   */
  webFilterRuleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webFilterRuleIds: 'WebFilterRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webFilterRuleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.webFilterRuleIds)) {
      $dara.Model.validateArray(this.webFilterRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

