// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFbIssueLabelsByLCResponseBodyData extends $dara.Model {
  issueLabel?: string[];
  static names(): { [key: string]: string } {
    return {
      issueLabel: 'IssueLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueLabel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.issueLabel)) {
      $dara.Model.validateArray(this.issueLabel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

