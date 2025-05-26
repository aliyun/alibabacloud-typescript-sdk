// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEssdCacheConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp10yt0gva71ei7d
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the disk cache feature.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableEssdCache?: boolean;
  /**
   * @remarks
   * The disk cache size. Unit: GB.
   * 
   * @example
   * 500
   */
  essdCacheSize?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      enableEssdCache: 'EnableEssdCache',
      essdCacheSize: 'EssdCacheSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      enableEssdCache: 'boolean',
      essdCacheSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

