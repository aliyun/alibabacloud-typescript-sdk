// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTaskApprovalCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket where the file is stored.
   * 
   * @example
   * ed****-17337752804***
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The region of the bucket where the file is stored.
   * 
   * @example
   * cn-hangzhou
   */
  ossBucketRegionId?: string;
  /**
   * @remarks
   * The approval result.
   * 
   * @example
   * Approved
   */
  result?: string;
  /**
   * @remarks
   * The ID of the transfer task.
   * 
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

