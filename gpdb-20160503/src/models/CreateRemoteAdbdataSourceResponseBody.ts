// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRemoteADBDataSourceResponseBodyDataSourceItem } from "./CreateRemoteAdbdataSourceResponseBodyDataSourceItem";


export class CreateRemoteADBDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returns the successfully added data sharing service data.
   */
  dataSourceItem?: CreateRemoteADBDataSourceResponseBodyDataSourceItem;
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
   * Workflow task ID.
   * 
   * @example
   * 90000
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceItem: 'DataSourceItem',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceItem: CreateRemoteADBDataSourceResponseBodyDataSourceItem,
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(this.dataSourceItem && typeof (this.dataSourceItem as any).validate === 'function') {
      (this.dataSourceItem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

