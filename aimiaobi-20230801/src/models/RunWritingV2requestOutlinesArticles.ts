// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingV2RequestOutlinesArticles extends $dara.Model {
  content?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

