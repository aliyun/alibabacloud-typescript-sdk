// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdvanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * *   The type of the advanced configuration. Valid values: -ONLINE: online configuration
   * *   \\-ONLINE_CAVA: online Cava configuration
   * *   \\-ONLINE_PLUGIN: online plug-in configuration
   * *   \\-ONLINE_QUERY: query configuration
   * *   \\-OFFLINE_DICT: offline dictionary configuration
   * *   \\-OFFLINE_TABLE: offline table configuration
   * *   \\-OFFLINE_COMMON: offline configuration
   * *   \\-OFFLINE_PLUGIN: offline plug-in configuration
   * *   \\-OFFLINE_INDEX: index configuration
   * 
   * @example
   * ONLINE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

