// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreateIndexJobResponseBodyJob extends $dara.Model {
  /**
   * @example
   * false
   */
  completed?: boolean;
  /**
   * @example
   * 2024-01-08 16:52:04.864664
   */
  createTime?: string;
  /**
   * @example
   * Failed to connect database.
   */
  error?: string;
  /**
   * @remarks
   * Job ID。
   * 
   * @example
   * 231460f8-75dc-405e-a669-0c5204887e91
   */
  id?: string;
  /**
   * @example
   * 20
   */
  progress?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 2024-01-08 16:53:04.864664
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      id: 'string',
      progress: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

