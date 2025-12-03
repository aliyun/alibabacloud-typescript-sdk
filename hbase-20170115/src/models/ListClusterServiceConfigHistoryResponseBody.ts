// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterServiceConfigHistoryResponseBodyConfigHistoryListConfigHistory extends $dara.Model {
  createTime?: string;
  effective?: string;
  name?: string;
  newValue?: string;
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      effective: 'Effective',
      name: 'Name',
      newValue: 'NewValue',
      oldValue: 'OldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      effective: 'string',
      name: 'string',
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

export class ListClusterServiceConfigHistoryResponseBodyConfigHistoryList extends $dara.Model {
  configHistory?: ListClusterServiceConfigHistoryResponseBodyConfigHistoryListConfigHistory[];
  static names(): { [key: string]: string } {
    return {
      configHistory: 'ConfigHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configHistory: { 'type': 'array', 'itemType': ListClusterServiceConfigHistoryResponseBodyConfigHistoryListConfigHistory },
    };
  }

  validate() {
    if(Array.isArray(this.configHistory)) {
      $dara.Model.validateArray(this.configHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryResponseBody extends $dara.Model {
  configHistoryList?: ListClusterServiceConfigHistoryResponseBodyConfigHistoryList;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      configHistoryList: 'ConfigHistoryList',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configHistoryList: ListClusterServiceConfigHistoryResponseBodyConfigHistoryList,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.configHistoryList && typeof (this.configHistoryList as any).validate === 'function') {
      (this.configHistoryList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

