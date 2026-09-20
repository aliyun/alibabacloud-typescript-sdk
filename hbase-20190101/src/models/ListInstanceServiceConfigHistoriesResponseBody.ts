// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceServiceConfigHistoriesResponseBodyConfigureHistoryListConfig extends $dara.Model {
  configureName?: string;
  createTime?: string;
  effective?: string;
  newValue?: string;
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 658C1549-2C02-4FD9-9490-EB3B285F9DCA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

