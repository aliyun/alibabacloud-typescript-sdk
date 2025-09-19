// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCycleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task configuration.
   * 
   * >  You can call the [DescribeCycleTaskList](~~DescribeCycleTaskList~~) operation to query the IDs of task configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * 435f626256ebf564cf5ba966a539****
   */
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

