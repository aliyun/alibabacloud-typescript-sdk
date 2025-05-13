// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertActionsResponseBodyAlertActionsEssParam extends $dara.Model {
  essGroupId?: string;
  essRuleId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      essGroupId: 'essGroupId',
      essRuleId: 'essRuleId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      essGroupId: 'string',
      essRuleId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

