// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecuritySuggestionListShrinkRequest extends $dara.Model {
  listConfigRulesRequestShrink?: string;
  static names(): { [key: string]: string } {
    return {
      listConfigRulesRequestShrink: 'ListConfigRulesRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listConfigRulesRequestShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

