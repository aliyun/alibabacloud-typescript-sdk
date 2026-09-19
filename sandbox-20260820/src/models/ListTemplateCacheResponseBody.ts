// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateCache } from "./PublicTemplateCache";


export class ListTemplateCacheResponseBody extends $dara.Model {
  code?: string;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  templateCaches?: PublicTemplateCache[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      templateCaches: 'templateCaches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      templateCaches: { 'type': 'array', 'itemType': PublicTemplateCache },
    };
  }

  validate() {
    if(Array.isArray(this.templateCaches)) {
      $dara.Model.validateArray(this.templateCaches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

