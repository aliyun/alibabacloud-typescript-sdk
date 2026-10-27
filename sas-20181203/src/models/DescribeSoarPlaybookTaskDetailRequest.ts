// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarPlaybookTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the playbook.
   * >You can call the [DescribePlaybooks](https://help.aliyun.com/document_detail/3000306.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  playbookId?: number;
  /**
   * @remarks
   * The ID of the vulnerability passed when creating the policy task.
   * >You can call the [DescribeVulList](~~DescribeVulList~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 14
   */
  recordId?: number;
  /**
   * @remarks
   * The UUID of the playbook task execution.
   * >You can call the [DescribeSoarRecords](https://help.aliyun.com/document_detail/2627455.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * a15e37da-abe0-4d87-acd2-024e875a****
   */
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      playbookId: 'PlaybookId',
      recordId: 'RecordId',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookId: 'number',
      recordId: 'number',
      requestUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

