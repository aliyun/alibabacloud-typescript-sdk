// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PluginAnalysisRequest extends $dara.Model {
  /**
   * @example
   * {
   *     "name": "plugin_name.zip",// plugin name
   *     "ossObject": {
   *       "bucketName": "bucketName",// oss bucket name
   *       "key": "my_plugin_dir/plugin_name.zip" // oss file name 
   *     }
   *   }
   */
  body?: string;
  /**
   * @example
   * false
   */
  dryRun?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      dryRun: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

