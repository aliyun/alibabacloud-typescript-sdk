// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueResponseBodyDataVoListQueueVO extends $dara.Model {
  accumulationCount?: number;
  attributes?: { [key: string]: any };
  autoDelete?: boolean;
  canDelete?: boolean;
  createTime?: number;
  durable?: boolean;
  exclusive?: boolean;
  lastConsumeTime?: number;
  name?: string;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      accumulationCount: 'AccumulationCount',
      attributes: 'Attributes',
      autoDelete: 'AutoDelete',
      canDelete: 'CanDelete',
      createTime: 'CreateTime',
      durable: 'Durable',
      exclusive: 'Exclusive',
      lastConsumeTime: 'LastConsumeTime',
      name: 'Name',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulationCount: 'number',
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      autoDelete: 'boolean',
      canDelete: 'boolean',
      createTime: 'number',
      durable: 'boolean',
      exclusive: 'boolean',
      lastConsumeTime: 'number',
      name: 'string',
      vhostName: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueResponseBodyDataVoList extends $dara.Model {
  queueVO?: ListQueueResponseBodyDataVoListQueueVO[];
  static names(): { [key: string]: string } {
    return {
      queueVO: 'QueueVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueVO: { 'type': 'array', 'itemType': ListQueueResponseBodyDataVoListQueueVO },
    };
  }

  validate() {
    if(Array.isArray(this.queueVO)) {
      $dara.Model.validateArray(this.queueVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  voList?: ListQueueResponseBodyDataVoList;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      voList: 'VoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      voList: ListQueueResponseBodyDataVoList,
    };
  }

  validate() {
    if(this.voList && typeof (this.voList as any).validate === 'function') {
      (this.voList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueResponseBody extends $dara.Model {
  code?: number;
  data?: ListQueueResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListQueueResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

