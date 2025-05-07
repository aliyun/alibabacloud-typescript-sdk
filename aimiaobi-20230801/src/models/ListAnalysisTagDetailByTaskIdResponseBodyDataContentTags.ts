// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags extends $dara.Model {
  /**
   * @example
   * xxx
   */
  summaryOverview?: string;
  /**
   * @example
   * xxx
   */
  tagName?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      summaryOverview: 'SummaryOverview',
      tagName: 'TagName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryOverview: 'string',
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

