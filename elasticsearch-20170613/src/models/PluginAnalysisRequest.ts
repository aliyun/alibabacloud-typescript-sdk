// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PluginAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * ```[
   *   {
   *     "name": "plugin_name.zip",// plugin name
   *     "ossObject": {
   *       "bucketName": "bucketName",// oss bucket name
   *       "key": "my_plugin_dir/plugin_name.zip" // oss file name 
   *     }
   *   }
   * ]
   * `
   * 
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
   * @remarks
   * Specifies whether to perform a pre-upload check. Valid values:
   * 
   * - true: Only performs the check.
   * - false: Directly uploads the plug-in.
   * 
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

