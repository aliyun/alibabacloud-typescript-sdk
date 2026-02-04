// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorItemsResponseBodyMonitorItemsKVStoreMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The metric.
   * 
   * @example
   * select
   */
  monitorKey?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * Counts/s
   */
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
  /**
   * @remarks
   * The returned metrics.
   * 
   * > *   **memoryUsage**, **GetQps**, and **PutQps** are supported only by Tair instances that use Redis 4.0 or later. **GetQps** and **PutQps** require the latest minor version. You can upgrade the major version or minor version of the instance as needed. For more information, see [Upgrade the major version](https://help.aliyun.com/document_detail/101764.html) and [Upgrade the minor version](https://help.aliyun.com/document_detail/56450.html).
   * > *   When you use instances of Redis 2.8, if the **hit_rate** metric is not displayed, you must upgrade the minor version of the instance. For more information, see [Upgrade the minor version](https://help.aliyun.com/document_detail/56450.html).
   */
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

