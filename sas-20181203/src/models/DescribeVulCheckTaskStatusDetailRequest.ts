// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulCheckTaskStatusDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The task IDs.
   */
  taskIds?: string[];
  /**
   * @remarks
   * The types of the vulnerabilities that are detected by the tasks.
   */
  types?: string[];
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 5d55af3c-35f3-4d4d-8ccc-8c5443b0****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
      types: 'Types',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'string' },
      types: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

