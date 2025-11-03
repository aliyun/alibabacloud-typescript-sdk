// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTaskApprovalCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket where the file resides.
   * 
   * @example
   * ed****-17337752804***
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The region where the OSS bucket storing the file resides.
   * 
   * @example
   * cn-hangzhou
   */
  ossBucketRegionId?: string;
  /**
   * @remarks
   * The approval result.
   * 
   * Valid values:
   * 
   * *   Approved
   * *   Rejected
   * 
   * @example
   * Approved
   */
  result?: string;
  /**
   * @remarks
   * The ID of the transmission task.
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

