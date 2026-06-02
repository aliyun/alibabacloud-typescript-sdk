// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InflightTaskTimeoutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2d350e38-f561-49b0-85d3-b90d9fc7e052
   */
  instanceId?: string;
  /**
   * @example
   * 1864632921948620
   */
  instanceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6bc0585c-0a8a-46d8-b042-23570bbb4855
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceOwnerId: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

