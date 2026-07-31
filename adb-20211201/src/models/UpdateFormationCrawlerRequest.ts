// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFormationCrawlerRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON string that contains the complete configuration of the crawler. This is the most important parameter. For more information about the internal JSON structure, see the CrawlerInfo structure definition section.
   * 
   * This parameter is required.
   */
  crawlerInfo?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 21
   */
  crawlerTaskId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the regions and zones supported by AnalyticDB for MySQL, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      crawlerInfo: 'CrawlerInfo',
      crawlerTaskId: 'CrawlerTaskId',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crawlerInfo: 'string',
      crawlerTaskId: 'string',
      DBClusterId: 'string',
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

