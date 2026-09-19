// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateCache } from "./PublicTemplateCache";


export class CreateTemplateCacheResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  templateCache?: PublicTemplateCache;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      templateCache: 'templateCache',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      templateCache: PublicTemplateCache,
    };
  }

  validate() {
    if(this.templateCache && typeof (this.templateCache as any).validate === 'function') {
      (this.templateCache as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

