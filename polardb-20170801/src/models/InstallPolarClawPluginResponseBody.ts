// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallPolarClawPluginResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The status code.
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
   * The name of the installed npm package.
   * 
   * @example
   * @larksuite/openclaw-lark@2026.4.7
   */
  npmPackage?: string;
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
   * The ID of the installed plugin.
   * 
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the gateway restarted.
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
      npmPackage: 'NpmPackage',
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
      npmPackage: 'string',
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

