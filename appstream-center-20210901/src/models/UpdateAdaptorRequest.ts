// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdaptorRequestUserConfig extends $dara.Model {
  /**
   * @remarks
   * The processing policy after a connection is disconnected. When modifying other UserConfig configurations, if you need to retain the original policy, pass the original value in the complete configuration object. This operation does not automatically populate default values.
   * 
   * @example
   * KEEP_CURRENT
   */
  disconnectAction?: string;
  /**
   * @remarks
   * The fixed resolution used when the application runs, in the format of width × height, in pixels.
   * 
   * @example
   * 1440x2560
   */
  fixedResolution?: string;
  /**
   * @remarks
   * The application window display configuration. When modifying other UserConfig configurations, if you need to retain the original configuration, pass the original value in the complete configuration object. This operation does not automatically populate default values.
   * 
   * @example
   * HIDE
   */
  showWindow?: string;
  static names(): { [key: string]: string } {
    return {
      disconnectAction: 'DisconnectAction',
      fixedResolution: 'FixedResolution',
      showWindow: 'ShowWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disconnectAction: 'string',
      fixedResolution: 'string',
      showWindow: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdaptorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application adapter to be modified. This parameter is required and must belong to an application adapter manageable by the current account.
   * 
   * @example
   * adt-bp1example****
   */
  adaptorId?: string;
  /**
   * @remarks
   * **Not enabled. Do not pass this parameter.** This parameter does not support modifying application scripts.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status and is not a valid parameter value.
   * 
   * @example
   * Not applicable (not enabled)
   */
  appScript?: string;
  /**
   * @remarks
   * **Not enabled. Do not pass this parameter.** This parameter does not support modifying executable file paths.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status and is not a valid parameter value.
   * 
   * @example
   * Not applicable (not enabled)
   */
  executeFileAddress?: string;
  /**
   * @remarks
   * The application optimization configuration, represented as a JSON object string. Pass this parameter only when specific optimization configuration requirements exist. The content must be a valid JSON object.
   * 
   * @example
   * {}
   */
  optimizeParam?: string;
  /**
   * @remarks
   * The command-line parameters used when the application starts. If this parameter is not empty, it is used to update the startup parameters of the application adapter. Specify the parameters based on the startup requirements of the application.
   * 
   * @example
   * --lang=zh-CN
   */
  silenceParam?: string;
  /**
   * @remarks
   * The application runtime configuration object. If this parameter is omitted, the existing user configuration is not modified.
   * 
   * **If this parameter is passed, the original UserConfig is completely replaced and not merged item by item.** Submit the complete configuration and include the configuration items that need to be retained. Subfields that are not provided do not automatically inherit the original values.
   * 
   * @example
   * {"FixedResolution":"1440x2560","DisconnectAction":"KEEP_CURRENT","ShowWindow":"HIDE"}
   */
  userConfig?: UpdateAdaptorRequestUserConfig;
  static names(): { [key: string]: string } {
    return {
      adaptorId: 'AdaptorId',
      appScript: 'AppScript',
      executeFileAddress: 'ExecuteFileAddress',
      optimizeParam: 'OptimizeParam',
      silenceParam: 'SilenceParam',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorId: 'string',
      appScript: 'string',
      executeFileAddress: 'string',
      optimizeParam: 'string',
      silenceParam: 'string',
      userConfig: UpdateAdaptorRequestUserConfig,
    };
  }

  validate() {
    if(this.userConfig && typeof (this.userConfig as any).validate === 'function') {
      (this.userConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

