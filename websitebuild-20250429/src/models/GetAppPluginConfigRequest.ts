// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppPluginConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1bae9ceaceea432d91c7069fab0dfc02
   */
  pluginId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      pluginId: 'PluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      pluginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

