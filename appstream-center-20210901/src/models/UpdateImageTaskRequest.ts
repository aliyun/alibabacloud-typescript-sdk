// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageTaskRequest extends $dara.Model {
  /**
   * @remarks
   * **Not enabled. Do not pass this parameter.** The task region is determined by the associated creation resource. This parameter is not used to switch regions.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status and is not a valid parameter value.
   * 
   * @example
   * Not applicable (not enabled)
   */
  bizRegionId?: string;
  /**
   * @remarks
   * **Not enabled. Do not pass this parameter.** This parameter is not involved in task status updates.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status and is not a valid parameter value.
   * 
   * @example
   * Not applicable (not enabled)
   */
  code?: string;
  /**
   * @remarks
   * The status identifier reported by the creation resource. It must match the task type and the current creation stage. Do not directly use the overall task status returned by GetTask as a substitute.
   * 
   * Valid values for image creation tasks (IMAGE_MANUAL and IMAGE_MANUAL_RETRY):
   * 
   * - **BUILDER_INIT_SUCCESS**: The creation environment is successfully initialized.
   * - **DOWNLOAD_SUCCESS**: The creation resource is successfully downloaded.
   * - **DOWNLOAD_FAILED**: The creation resource fails to be downloaded.
   * - **BUILD_START**: The image creation starts.
   * - **BUILD_SUCCESS**: The application installation and image configuration are successful.
   * - **BUILD_FAILED**: The application installation or image configuration fails.
   * - **BUILD_COMPLETE**: The creation is completed and the subsequent verification process starts.
   * - **BUILD_COMPLETE_SKIP_VALIDATE**: The creation is completed in a compatible state. Whether verification is performed is subject to the task query result.
   * 
   * Valid values for application adaptation tasks:
   * 
   * - **BUILDER_INIT_SUCCESS**: The creation environment is successfully initialized.
   * - **DOWNLOAD_SUCCESS**: The application resource is successfully downloaded.
   * - **DOWNLOAD_FAILED**: The application resource fails to be downloaded.
   * - **BUILD_START**: The application recording starts.
   * - **BUILD_SUCCESS**: The application recording is successful.
   * - **BUILD_FAILED**: The application recording fails.
   * - **NAS_DISPATCH_SUCCESS**: The application files are successfully distributed to NAS.
   * - **NAS_DISPATCH_FAILED**: The application files fail to be distributed to NAS.
   * - **OSS_UPLOAD_SUCCESS**: The application files are successfully uploaded to OSS.
   * - **OSS_UPLOAD_FAILED**: The application files fail to be uploaded to OSS.
   * - **UPLOAD_SUCCESS**: The application files are successfully uploaded.
   * - **UPLOAD_FAILED**: The application files fail to be uploaded.
   * - **BUILD_COMPLETE**: The application creation is completed.
   * 
   * @example
   * BUILD_START
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task to be updated. The task and its creation resource must already exist.
   * 
   * This parameter is required.
   * 
   * @example
   * tid-bp1example****
   */
  taskId?: string;
  /**
   * @remarks
   * **Not enabled. Do not pass this parameter.** This parameter does not support updating the task step.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status and is not a valid parameter value.
   * 
   * @example
   * Not applicable (not enabled)
   */
  taskStep?: string;
  /**
   * @remarks
   * The actual type of the task to be updated, which must match the task specified by TaskId. Status updates support the following application adaptation and manual image creation tasks:
   * 
   * - **ADAPT_AUTO**: Automatic application adaptation creation.
   * - **ADAPT_AUTO_RETRY**: Retry for automatic application adaptation creation.
   * - **ADAPT_MANUAL**: Manual application adaptation creation.
   * - **ADAPT_MANUAL_RETRY**: Retry for manual application adaptation creation.
   * - **IMAGE_MANUAL**: Manual image creation.
   * - **IMAGE_MANUAL_RETRY**: Retry for manual image creation.
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE_MANUAL
   */
  taskType?: string;
  /**
   * @remarks
   * **Not enabled. Do not pass this parameter.** This parameter does not support modifying the image version associated with the task.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status and is not a valid parameter value.
   * 
   * @example
   * Not applicable (not enabled)
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      code: 'Code',
      status: 'Status',
      taskId: 'TaskId',
      taskStep: 'TaskStep',
      taskType: 'TaskType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      code: 'string',
      status: 'string',
      taskId: 'string',
      taskStep: 'string',
      taskType: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

