// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopFormationCrawlerRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 21
   */
  crawlerTaskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-crawler-dbname
   */
  crawlerTaskName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      crawlerTaskId: 'CrawlerTaskId',
      crawlerTaskName: 'CrawlerTaskName',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crawlerTaskId: 'number',
      crawlerTaskName: 'string',
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

