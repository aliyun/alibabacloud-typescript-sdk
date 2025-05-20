// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebSearchResponseBodyResultSearchResult extends $dara.Model {
  content?: string;
  link?: string;
  position?: number;
  snippet?: string;
  tilte?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      link: 'link',
      position: 'position',
      snippet: 'snippet',
      tilte: 'tilte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      link: 'string',
      position: 'number',
      snippet: 'string',
      tilte: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

