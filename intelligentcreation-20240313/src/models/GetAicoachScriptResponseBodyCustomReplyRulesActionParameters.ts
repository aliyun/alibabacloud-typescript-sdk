// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachScriptResponseBodyCustomReplyRulesActionParameters extends $dara.Model {
  assessPointId?: string;
  customContent?: string;
  static names(): { [key: string]: string } {
    return {
      assessPointId: 'assessPointId',
      customContent: 'customContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessPointId: 'string',
      customContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

