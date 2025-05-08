// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequestContents extends $dara.Model {
  mainText?: boolean;
  markdownText?: boolean;
  rerankScore?: boolean;
  summary?: boolean;
  static names(): { [key: string]: string } {
    return {
      mainText: 'mainText',
      markdownText: 'markdownText',
      rerankScore: 'rerankScore',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainText: 'boolean',
      markdownText: 'boolean',
      rerankScore: 'boolean',
      summary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

