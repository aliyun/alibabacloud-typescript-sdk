// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision extends $dara.Model {
  /**
   * @example
   * 2020-03-10 20:26:29
   */
  createTime?: string;
  /**
   * @example
   * 2321
   */
  modelId?: number;
  modelName?: string;
  /**
   * @example
   * 0.98
   */
  precision?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 7C1DEF5F-2C18-4D36-99C6-8C276F781796
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modelId: 'ModelId',
      modelName: 'ModelName',
      precision: 'Precision',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modelId: 'number',
      modelName: 'string',
      precision: 'number',
      status: 'number',
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

