// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRemoteADBDataSourcesResponseBodyDataSourceItems } from "./ListRemoteAdbdataSourcesResponseBodyDataSourceItems";


export class ListRemoteADBDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returns the successfully added data sharing service data.
   */
  dataSourceItems?: ListRemoteADBDataSourcesResponseBodyDataSourceItems;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * e9d60eb1-e90d-4bc6-a470-c8b767460858
   */
  requestId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 90000
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceItems: 'DataSourceItems',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceItems: ListRemoteADBDataSourcesResponseBodyDataSourceItems,
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(this.dataSourceItems && typeof (this.dataSourceItems as any).validate === 'function') {
      (this.dataSourceItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

