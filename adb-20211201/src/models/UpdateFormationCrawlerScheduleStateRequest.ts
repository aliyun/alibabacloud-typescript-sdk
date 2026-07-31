// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFormationCrawlerScheduleStateRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 247
   */
  crawlerTaskId?: number;
  /**
   * @remarks
   * The name of the crawler task.
   * 
   * This parameter is required.
   * 
   * @example
   * test-crawler-dbname
   */
  crawlerTaskName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1565u55p32****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * >You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling state. Valid values:
   * 
   * - NORMAL: resume.
   * 
   * - DISABLED: pause.
   * 
   * This parameter is required.
   * 
   * @example
   * DISABLED
   */
  scheduleState?: string;
  static names(): { [key: string]: string } {
    return {
      crawlerTaskId: 'CrawlerTaskId',
      crawlerTaskName: 'CrawlerTaskName',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      scheduleState: 'ScheduleState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crawlerTaskId: 'number',
      crawlerTaskName: 'string',
      DBClusterId: 'string',
      regionId: 'string',
      scheduleState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

