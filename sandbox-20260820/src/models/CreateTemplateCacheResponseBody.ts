// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateCache } from "./PublicTemplateCache";


export class CreateTemplateCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. The value is 200 if the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B5AD8B54-4358-5F5B-ACAA-52F2016459C6
   */
  requestId?: string;
  /**
   * @remarks
   * The template cache object.
   */
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

