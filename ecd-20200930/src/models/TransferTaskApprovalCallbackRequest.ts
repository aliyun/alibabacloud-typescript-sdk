// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTaskApprovalCallbackRequest extends $dara.Model {
  /**
   * @example
   * ed****-17337752804***
   */
  ossBucketName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  ossBucketRegionId?: string;
  /**
   * @example
   * Approved
   */
  result?: string;
  /**
   * @example
   * trt-msndfksm18fs****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketName: 'OssBucketName',
      ossBucketRegionId: 'OssBucketRegionId',
      result: 'Result',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucketName: 'string',
      ossBucketRegionId: 'string',
      result: 'string',
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

