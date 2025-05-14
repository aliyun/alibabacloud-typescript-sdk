// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTodoTaskExecutorStatusRequestExecutorStatusList extends $dara.Model {
  /**
   * @example
   * userId
   */
  id?: string;
  /**
   * @example
   * true
   */
  isDone?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isDone: 'isDone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isDone: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

