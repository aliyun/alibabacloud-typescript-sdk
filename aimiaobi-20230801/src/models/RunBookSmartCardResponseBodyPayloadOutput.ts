// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunBookSmartCardResponseBodyPayloadOutput extends $dara.Model {
  content?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

