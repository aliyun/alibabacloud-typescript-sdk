// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogMetaResponseBodyLogMetaList extends $dara.Model {
  /**
   * @remarks
   * The category of logs. Valid values:
   * 
   * *   **host**
   * *   **network**
   * *   **security**
   * 
   * @example
   * host
   */
  category?: string;
  /**
   * @remarks
   * The time period after which logs in hot storage are moved to cold storage. Unit: days.
   * 
   * >  If the value is -1, logs that are stored in hot storage are not moved to cold storage.
   * 
   * @example
   * -1
   */
  hotTtl?: number;
  /**
   * @remarks
   * The name of the log type.
   * 
   * @example
   * Login
   */
  logDesc?: string;
  /**
   * @remarks
   * The name of the dedicated Logstore in which logs are stored.
   * 
   * @example
   * aegis-log-login
   */
  logStore?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * aegis-log
   */
  project?: string;
  /**
   * @remarks
   * The status of the log analysis feature. Valid values:
   * 
   * *   **disabled**
   * *   **enabled**
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The topic of logs that are delivered.
   * 
   * @example
   * aegis-log-login
   */
  topic?: string;
  /**
   * @remarks
   * The number of days during which logs can be retained.
   * 
   * @example
   * 180
   */
  ttl?: number;
  /**
   * @remarks
   * The name of the dedicated Logstore in which user logs are stored.
   * 
   * @example
   * aegis-log-network
   */
  userLogStore?: string;
  /**
   * @remarks
   * The name of the dedicated project in which logs are stored.
   * 
   * @example
   * sasnew-log-XXXX-cn-hangzhou
   */
  userProject?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  userRegion?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      hotTtl: 'HotTtl',
      logDesc: 'LogDesc',
      logStore: 'LogStore',
      project: 'Project',
      status: 'Status',
      topic: 'Topic',
      ttl: 'Ttl',
      userLogStore: 'UserLogStore',
      userProject: 'UserProject',
      userRegion: 'UserRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      hotTtl: 'number',
      logDesc: 'string',
      logStore: 'string',
      project: 'string',
      status: 'string',
      topic: 'string',
      ttl: 'number',
      userLogStore: 'string',
      userProject: 'string',
      userRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the configurations of the log analysis feature.
   */
  logMetaList?: DescribeLogMetaResponseBodyLogMetaList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D0D6E6E4-CB8C-4897-B852-46AEFDA04B21
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logMetaList: 'LogMetaList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logMetaList: { 'type': 'array', 'itemType': DescribeLogMetaResponseBodyLogMetaList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logMetaList)) {
      $dara.Model.validateArray(this.logMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

