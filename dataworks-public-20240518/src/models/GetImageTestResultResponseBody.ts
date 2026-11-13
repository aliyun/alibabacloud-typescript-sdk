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
   * The operation time. The value is a 64-bit timestamp.
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
   * The image publishing status. Valid values:
   * - Untest: Not tested.
   * - Testing: Testing.
   * - TestFailed: Test failed.
   * - Unpublished: Unpublished.
   * - Publishing: Publishing.
   * - Published: Published.
   * - PublishFailed: Publishing failed.
   * - Building: Building.
   * - BuildSuccess: Build succeeded.
   * - BuildFailed: Build failed.
   * - Accelerating: Accelerating.
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
   * 123456789
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The test process status. Valid values:
   * - running: Running.
   * - completed: Completed.
   * - failed: Failed.
   * - cancelled: Canceled.
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
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

