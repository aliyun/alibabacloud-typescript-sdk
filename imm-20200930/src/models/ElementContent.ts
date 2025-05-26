// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElementContent extends $dara.Model {
  content?: string;
  timeRange?: number[];
  type?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      timeRange: 'TimeRange',
      type: 'Type',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      timeRange: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
      URL: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.timeRange)) {
      $dara.Model.validateArray(this.timeRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

