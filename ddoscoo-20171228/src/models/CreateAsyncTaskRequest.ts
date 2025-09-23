// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAsyncTaskRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"timestamp": 1530276554, "instanceId": "ddoscoo-woieuroi234"}
   */
  taskParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      taskParams: 'string',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

