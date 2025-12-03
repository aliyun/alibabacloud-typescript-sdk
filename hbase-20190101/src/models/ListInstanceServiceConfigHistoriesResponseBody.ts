// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryListConfig extends $dara.Model {
  /**
   * @example
   * hbase#hbase-site.xml#hbase.client.keyvalue.maxsize
   */
  configureName?: string;
  /**
   * @example
   * 1608708923000
   */
  createTime?: string;
  /**
   * @example
   * false
   */
  effective?: string;
  /**
   * @example
   * 10485770
   */
  newValue?: string;
  /**
   * @example
   * 10485760
   */
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      configureName: 'ConfigureName',
      createTime: 'CreateTime',
      effective: 'Effective',
      newValue: 'NewValue',
      oldValue: 'OldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureName: 'string',
      createTime: 'string',
      effective: 'string',
      newValue: 'string',
      oldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryList extends $dara.Model {
  config?: ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryListConfig },
    };
  }

  validate() {
    if(Array.isArray(this.config)) {
      $dara.Model.validateArray(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigHistoriesResponseBody extends $dara.Model {
  configureHistoryList?: ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryList;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @example
   * 658C1549-2C02-4FD9-9490-EB3B285F9DCA
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      configureHistoryList: 'ConfigureHistoryList',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureHistoryList: ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryList,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.configureHistoryList && typeof (this.configureHistoryList as any).validate === 'function') {
      (this.configureHistoryList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

