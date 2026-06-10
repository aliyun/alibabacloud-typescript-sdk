// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppPluginConfigResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary key
   * 
   * @example
   * 16257
   */
  id?: number;
  /**
   * @remarks
   * Specific widget configuration, formatted as a JSON string. Refer to the utility class: com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig and the toJsonString method of its child classes. Developers should inherit this widget configuration class and implement the corresponding widget configuration. The structure of each widget configuration is identical to the MPS queue configuration structure created on the Dataphin Page.
   * 
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @remarks
   * View Description
   * 
   * @example
   * a simple test plugin
   */
  pluginDesc?: string;
  /**
   * @remarks
   * ID of the attached API Gateway plugin
   * 
   * @example
   * 1bae9ceaceea432d91c7069fab0dfc02
   */
  pluginId?: string;
  /**
   * @remarks
   * Plugin Name. It can contain uppercase and lowercase English letters, Chinese characters, digits, and underscores (_). The length must be between 4 and 50 characters, and it cannot start with an underscore.
   * 
   * @example
   * tf_testaccapigatewayplugin29311
   */
  pluginName?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 123
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

export class GetAppPluginConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status or POP error code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Additional information
   * 
   * @example
   * Instance `wget h33E1En5.popscan.xaliyun.com` does not exist.
   */
  message?: string;
  /**
   * @remarks
   * Response data
   */
  module?: GetAppPluginConfigResponseBodyModule;
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
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
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
      module: GetAppPluginConfigResponseBodyModule,
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

