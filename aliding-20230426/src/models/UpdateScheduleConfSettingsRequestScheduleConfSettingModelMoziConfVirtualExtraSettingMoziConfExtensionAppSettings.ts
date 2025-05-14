// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduleConfSettingsRequestScheduleConfSettingModelMoziConfVirtualExtraSettingMoziConfExtensionAppSettings extends $dara.Model {
  /**
   * @example
   * 0
   */
  autoOpenMode?: number;
  /**
   * @example
   * xxxx
   */
  coolAppCode?: string;
  /**
   * @example
   * xxx
   */
  extensionAppBizData?: string;
  static names(): { [key: string]: string } {
    return {
      autoOpenMode: 'AutoOpenMode',
      coolAppCode: 'CoolAppCode',
      extensionAppBizData: 'ExtensionAppBizData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoOpenMode: 'number',
      coolAppCode: 'string',
      extensionAppBizData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

