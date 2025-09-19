// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterPluginInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the clusters.
   * 
   * This parameter is required.
   */
  clusterIds?: string[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * alihips
   */
  pluginName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      lang: 'Lang',
      pluginName: 'PluginName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      pluginName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterIds)) {
      $dara.Model.validateArray(this.clusterIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

