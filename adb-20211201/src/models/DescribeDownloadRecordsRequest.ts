// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all AnalyticDB for MySQL Lakehouse Edition (3.0) clusters in a specific region, including the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vb6ha79k6e****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh**: Simplified Chinese (default).
   * 
   * - **en**: English.
   * 
   * - **ja**: Japanese.
   * 
   * - **zh-tw**: Traditional Chinese.
   * 
   * @example
   * zh
   * 
   * @deprecated
   */
  lang?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

