// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnablePolarClawPluginResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * The ID of the plugin that was enabled.
   * 
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7F2007D3-7E74-4ECB-89A8-BF130D******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the gateway was restarted.
   * 
   * @example
   * true
   */
  restarted?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      ok: 'Ok',
      pluginId: 'PluginId',
      requestId: 'RequestId',
      restarted: 'Restarted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      ok: 'boolean',
      pluginId: 'string',
      requestId: 'string',
      restarted: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

