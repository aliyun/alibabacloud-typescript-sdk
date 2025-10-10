// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadPageItem extends $dara.Model {
  errorMessage?: string;
  html?: string;
  markdown?: string;
  rawHtml?: string;
  statusCode?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      html: 'html',
      markdown: 'markdown',
      rawHtml: 'rawHtml',
      statusCode: 'statusCode',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      html: 'string',
      markdown: 'string',
      rawHtml: 'string',
      statusCode: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

