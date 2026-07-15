// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPluginClassResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The plug-in alias.
   * 
   * @example
   * Key Auth
   */
  alias?: string;
  /**
   * @remarks
   * The plug-in description.
   * 
   * @example
   * Authentication based on API Key
   */
  description?: string;
  /**
   * @remarks
   * The document key.
   * 
   * @example
   * doc-key-auth
   */
  document?: string;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * key-auth
   */
  name?: string;
  /**
   * @remarks
   * The publish status.
   * 
   * @example
   * Success
   */
  publishStatus?: string;
  /**
   * @remarks
   * The plug-in type.
   * 
   * @example
   * Auth
   */
  type?: string;
  /**
   * @remarks
   * The Wasm plug-in programming language.
   * 
   * @example
   * TinyGo
   */
  wasmLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
      document: 'document',
      name: 'name',
      publishStatus: 'publishStatus',
      type: 'type',
      wasmLanguage: 'wasmLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      document: 'string',
      name: 'string',
      publishStatus: 'string',
      type: 'string',
      wasmLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetPluginClassResponseBodyData;
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
   * 29D8B6AE-326F-51AA-83F8-CC00DAF513F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPluginClassResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

