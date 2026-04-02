// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTempFileRequest extends $dara.Model {
  /**
   * @example
   * 1000
   */
  capacity?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * filename
   */
  name?: string;
  /**
   * @example
   * somedir/
   */
  prefix?: string;
  /**
   * @example
   * task-05cexxxxxxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      instanceId: 'InstanceId',
      name: 'Name',
      prefix: 'Prefix',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      instanceId: 'string',
      name: 'string',
      prefix: 'string',
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

