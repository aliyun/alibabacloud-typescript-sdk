// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginClassResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The plugin class ID.
   * 
   * @example
   * pls-csqmjxxxxxxx
   */
  pluginClassId?: string;
  static names(): { [key: string]: string } {
    return {
      pluginClassId: 'pluginClassId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginClassId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePluginClassResponseBody extends $dara.Model {
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
  data?: CreatePluginClassResponseBodyData;
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
   * 880F8DC9-1CD9-5A83-AA54-AD2D3B7D2466
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
      data: CreatePluginClassResponseBodyData,
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

