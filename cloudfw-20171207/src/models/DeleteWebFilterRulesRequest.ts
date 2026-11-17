// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWebFilterRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of web filtering rule IDs to delete. You can specify up to 100 IDs in a single request. The IDs cannot be empty and must be unique.
   * 
   * This parameter is required.
   */
  webFilterRuleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      webFilterRuleIds: 'WebFilterRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

