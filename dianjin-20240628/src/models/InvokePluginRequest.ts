// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokePluginRequest extends $dara.Model {
  /**
   * @remarks
   * Request parameters.
   * 
   * @example
   * {
   *         "query": "介绍一下贵金属业务",
   *         "filters": [
   *             {
   *                 "libraryId": "9xznrxw"
   *             }
   *         ],
   *         "topK": 1
   *     }
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The plugin ID.
   * 
   * @example
   * 3mj87da7zr
   */
  pluginId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
      pluginId: 'pluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pluginId: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

