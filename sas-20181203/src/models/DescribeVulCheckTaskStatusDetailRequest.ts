// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulCheckTaskStatusDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * >Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The list of task IDs.
   */
  taskIds?: string[];
  /**
   * @remarks
   * The list of vulnerability types for the one-click scan.
   */
  types?: string[];
  /**
   * @remarks
   * The UUID of the server to query.
   * 
   * @example
   * 5d55af3c-35f3-4d4d-8ccc-8c5443b0****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      taskIds: 'TaskIds',
      types: 'Types',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryAccountId: 'number',
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

