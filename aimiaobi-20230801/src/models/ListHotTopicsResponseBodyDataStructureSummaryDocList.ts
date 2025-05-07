// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotTopicsResponseBodyDataStructureSummaryDocList extends $dara.Model {
  source?: string;
  /**
   * @example
   * xxxxx
   */
  title?: string;
  /**
   * @example
   * http://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

