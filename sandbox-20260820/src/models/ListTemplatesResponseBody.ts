// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplate } from "./PublicTemplate";


export class ListTemplatesResponseBody extends $dara.Model {
  code?: string;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  templates?: PublicTemplate[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      templates: 'templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': PublicTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

