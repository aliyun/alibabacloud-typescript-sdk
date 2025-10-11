// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GenerateTraceabilityNews extends $dara.Model {
  index?: number;
  pubTime?: string;
  searchSource?: string;
  searchSourceName?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
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

export class GenerateTraceability extends $dara.Model {
  news?: GenerateTraceabilityNews[];
  static names(): { [key: string]: string } {
    return {
      news: 'News',
    };
  }

  static types(): { [key: string]: any } {
    return {
      news: { 'type': 'array', 'itemType': GenerateTraceabilityNews },
    };
  }

  validate() {
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

