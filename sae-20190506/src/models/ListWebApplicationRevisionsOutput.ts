// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Revision } from "./Revision";


export class ListWebApplicationRevisionsOutput extends $dara.Model {
  nextToken?: string;
  revisions?: Revision[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      revisions: 'Revisions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      revisions: { 'type': 'array', 'itemType': Revision },
    };
  }

  validate() {
    if(Array.isArray(this.revisions)) {
      $dara.Model.validateArray(this.revisions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

