// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPluginClassResponseBodyData extends $dara.Model {
  alias?: string;
  description?: string;
  document?: string;
  name?: string;
  publishStatus?: string;
  type?: string;
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
  code?: string;
  data?: GetPluginClassResponseBodyData;
  message?: string;
  /**
   * @remarks
   * Id of the request
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

