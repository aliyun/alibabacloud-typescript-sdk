// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocQaResponseBodyPayloadOutputReferences extends $dara.Model {
  /**
   * @example
   * 2024-10-08 18:00
   */
  pubTime?: string;
  source?: string;
  /**
   * @example
   * 123456
   */
  sourceDocId?: string;
  title?: string;
  /**
   * @example
   * http://xxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      pubTime: 'PubTime',
      source: 'Source',
      sourceDocId: 'SourceDocId',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubTime: 'string',
      source: 'string',
      sourceDocId: 'string',
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

