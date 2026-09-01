// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member accounts in the resource folder (Alibaba Cloud account).
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The ID of the cloud service configuration check task that you want to query.
   * > You can call the [SubmitCheck](~~SubmitCheck~~) operation to obtain this parameter.
   * 
   * @example
   * 5347c7b6-c85c-4070-846a-3029e08e****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryAccountId: 'number',
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

