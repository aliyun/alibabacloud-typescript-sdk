// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginAttachmentResponseBodyData extends $dara.Model {
  /**
   * @example
   * pa-cvs7jpmm1hkgihaqv4a0
   */
  pluginAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      pluginAttachmentId: 'pluginAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginAttachmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePluginAttachmentResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreatePluginAttachmentResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EBCB8485-24F9-54CD-B258-CB15FDB27677
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
      data: CreatePluginAttachmentResponseBodyData,
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

