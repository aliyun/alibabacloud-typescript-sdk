// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppPluginConfigForAdminResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 16257
   */
  id?: number;
  /**
   * @remarks
   * The plugin configuration.
   * 
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @remarks
   * The plugin description.
   * 
   * @example
   * a simple test plugin
   */
  pluginDesc?: string;
  /**
   * @remarks
   * The plugin ID.
   * 
   * @example
   * 1bae9ceaceea432d91c7069fab0dfc02
   */
  pluginId?: string;
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * tf_testaccapigatewayplugin29311
   */
  pluginName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1111
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      pluginConfig: 'PluginConfig',
      pluginDesc: 'PluginDesc',
      pluginId: 'PluginId',
      pluginName: 'PluginName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      pluginConfig: 'string',
      pluginDesc: 'string',
      pluginId: 'string',
      pluginName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppPluginConfigForAdminResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation status or POP error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * true
   */
  module?: GetAppPluginConfigForAdminResponseBodyModule;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: GetAppPluginConfigForAdminResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

