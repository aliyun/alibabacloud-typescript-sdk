// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMpsSchedulerListResponseBodyResultContentDataList extends $dara.Model {
  createType?: number;
  deliveryType?: number;
  executedStatus?: string;
  gmtCreate?: number;
  parentId?: string;
  pushContent?: string;
  pushTime?: number;
  pushTitle?: string;
  strategyType?: number;
  type?: number;
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      createType: 'CreateType',
      deliveryType: 'DeliveryType',
      executedStatus: 'ExecutedStatus',
      gmtCreate: 'GmtCreate',
      parentId: 'ParentId',
      pushContent: 'PushContent',
      pushTime: 'PushTime',
      pushTitle: 'PushTitle',
      strategyType: 'StrategyType',
      type: 'Type',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createType: 'number',
      deliveryType: 'number',
      executedStatus: 'string',
      gmtCreate: 'number',
      parentId: 'string',
      pushContent: 'string',
      pushTime: 'number',
      pushTitle: 'string',
      strategyType: 'number',
      type: 'number',
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpsSchedulerListResponseBodyResultContentData extends $dara.Model {
  list?: QueryMpsSchedulerListResponseBodyResultContentDataList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryMpsSchedulerListResponseBodyResultContentDataList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpsSchedulerListResponseBodyResultContent extends $dara.Model {
  data?: QueryMpsSchedulerListResponseBodyResultContentData;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryMpsSchedulerListResponseBodyResultContentData,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpsSchedulerListResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryMpsSchedulerListResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryMpsSchedulerListResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

