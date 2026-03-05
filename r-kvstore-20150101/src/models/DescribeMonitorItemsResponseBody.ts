// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorItemsResponseBodyMonitorItemsKVStoreMonitorItem extends $dara.Model {
  monitorKey?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      monitorKey: 'MonitorKey',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorKey: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorItemsResponseBodyMonitorItems extends $dara.Model {
  KVStoreMonitorItem?: DescribeMonitorItemsResponseBodyMonitorItemsKVStoreMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      KVStoreMonitorItem: 'KVStoreMonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVStoreMonitorItem: { 'type': 'array', 'itemType': DescribeMonitorItemsResponseBodyMonitorItemsKVStoreMonitorItem },
    };
  }

  validate() {
    if(Array.isArray(this.KVStoreMonitorItem)) {
      $dara.Model.validateArray(this.KVStoreMonitorItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorItemsResponseBody extends $dara.Model {
  monitorItems?: DescribeMonitorItemsResponseBodyMonitorItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8BEB2618-9517-43F3-A233-E0B34512****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorItems: 'MonitorItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItems: DescribeMonitorItemsResponseBodyMonitorItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.monitorItems && typeof (this.monitorItems as any).validate === 'function') {
      (this.monitorItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

