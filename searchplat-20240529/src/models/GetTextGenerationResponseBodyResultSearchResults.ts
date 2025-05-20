// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextGenerationResponseBodyResultSearchResults extends $dara.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

