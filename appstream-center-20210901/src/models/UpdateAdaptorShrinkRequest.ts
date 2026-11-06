// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdaptorShrinkRequest extends $dara.Model {
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
   * **Not enabled. Do not pass this parameter.** This operation does not support modifying application scripts through this parameter.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status and is not a valid parameter value.
   * 
   * @example
   * Not applicable (not enabled)
   */
  appScript?: string;
  /**
   * @remarks
   * **Not enabled. Do not pass this parameter.** This operation does not support modifying executable file paths through this parameter.
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
   * The command-line parameters used when the application starts. If not empty, this parameter is used to update the startup parameters of the application adapter. Specify the value based on the startup requirements of the application.
   * 
   * @example
   * --lang=zh-CN
   */
  silenceParam?: string;
  /**
   * @remarks
   * The application runtime configuration object. If this parameter is omitted, the existing user configuration is not modified.
   * 
   * **If passed, the original UserConfig is entirely replaced and not merged item by item.** Submit the complete configuration and include the configuration items that need to be retained. Subfields that are not provided do not automatically inherit the original values.
   * 
   * @example
   * {"FixedResolution":"1440x2560","DisconnectAction":"KEEP_CURRENT","ShowWindow":"HIDE"}
   */
  userConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorId: 'AdaptorId',
      appScript: 'AppScript',
      executeFileAddress: 'ExecuteFileAddress',
      optimizeParam: 'OptimizeParam',
      silenceParam: 'SilenceParam',
      userConfigShrink: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorId: 'string',
      appScript: 'string',
      executeFileAddress: 'string',
      optimizeParam: 'string',
      silenceParam: 'string',
      userConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

