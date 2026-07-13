// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * at-xxx
   */
  instanceId?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  nextToken?: string;
  status?: string;
  /**
   * @example
   * LIFECYCLE_MAGIC_PAY_ORDER_CALLBACK_CREATE
   */
  taskCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
      taskCode: 'TaskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      taskCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

