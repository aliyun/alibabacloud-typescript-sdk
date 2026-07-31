// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFormationCrawlerRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON string that contains the complete crawler configuration. This is the most important parameter. For the internal JSON structure, see the CrawlerInfo structure definition section.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "sourceType": "OSSWAREHOUSE",
   *   "dbName": "your_target_db",
   *   "sourceInfo": {
   *     "ossSourceInfo": {
   *       "sourceMode": "WAREHOUSE",
   *       "ossLocations": ["oss://your-bucket/your-path/"],
   *       "exclusions": [],
   *       "inclusions": []
   *     }
   *   },
   *   "classifiers": ["csv"],
   *   "schemaChangePolicy": {
   *     "updateRule": "ONLY_ADD_COLUMN",
   *     "deleteRule": "IGNORE"
   *   },
   *   "frequency": {
   *     "type": "monthly",
   *     "cron": "0+00+00+1+*+?+*"
   *   },
   *   "configuration": "adb.crawler.csv.columns.specify.delimiter.char=auto\\nadb.crawler.csv.columns.specify.quote.char=auto\\n"
   * }
   */
  crawlerInfo?: string;
  /**
   * @remarks
   * The ADB instance ID. This specifies the resource-level scope of the operation.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp*****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the instance.
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
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crawlerInfo: 'string',
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

