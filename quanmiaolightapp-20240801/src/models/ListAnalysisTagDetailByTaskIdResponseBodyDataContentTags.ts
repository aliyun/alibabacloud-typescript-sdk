// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags extends $dara.Model {
  tagName?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      tagName: 'tagName',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
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

