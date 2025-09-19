// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarPlaybookTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Playbook ID.
   * > You can obtain this parameter by calling the [DescribePlaybooks](https://help.aliyun.com/document_detail/2627461.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  playbookId?: number;
  /**
   * @remarks
   * The vulnerability ID passed when creating the policy task.
   * > You can obtain this parameter by calling the [DescribeVulList](~~DescribeVulList~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 14
   */
  recordId?: number;
  /**
   * @remarks
   * UUID of the playbook task execution.
   * > You can obtain this parameter by calling the [DescribeSoarRecords](https://help.aliyun.com/document_detail/2627455.html) interface.
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

