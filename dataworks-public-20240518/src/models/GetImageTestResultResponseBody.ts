// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTestResultResponseBodyTestResult extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * Custom_image_xxxx_xxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The test result message.
   * 
   * @example
   * test finished
   */
  message?: string;
  /**
   * @remarks
   * The operation time, represented as a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  operateTime?: number;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 582d4896-d224-413b-b883-239eeebe0bc5
   */
  processId?: string;
  /**
   * @remarks
   * The image publish status. Valid values:
   * - Untest: Not tested.
   * - Testing: Testing in progress.
   * - TestFailed: Test failed.
   * - Unpublished: Not published.
   * - Publishing: Publishing in progress.
   * - Published: Published.
   * - PublishFailed: Publish failed.
   * - Building: Building in progress.
   * - BuildSuccess: Build succeeded.
   * - BuildFailed: Build failed.
   * - Accelerating: Acceleration in progress.
   * - AccelerateSuccess: Acceleration succeeded.
   * - AccelerateFailed: Acceleration failed.
   * 
   * @example
   * Unpublished
   */
  publishStage?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * Serverless_res_group_****
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The test process status. Valid values:
   * - running: Running.
   * - completed: Completed.
   * - failed: Failed.
   * - cancelled: Cancelled.
   * 
   * @example
   * completed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      message: 'Message',
      operateTime: 'OperateTime',
      processId: 'ProcessId',
      publishStage: 'PublishStage',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      message: 'string',
      operateTime: 'number',
      processId: 'string',
      publishStage: 'string',
      resourceGroupId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTestResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The details of the image test result.
   */
  testResult?: GetImageTestResultResponseBodyTestResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      testResult: 'TestResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      testResult: GetImageTestResultResponseBodyTestResult,
    };
  }

  validate() {
    if(this.testResult && typeof (this.testResult as any).validate === 'function') {
      (this.testResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

