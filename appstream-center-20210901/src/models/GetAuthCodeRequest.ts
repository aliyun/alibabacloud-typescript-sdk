// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to connect to. When specifying this parameter, you must also provide the matching AppVersionId. If omitted, the application configured in the building or validation environment is used.
   * 
   * @example
   * app-bp1example****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the application version to connect to. This parameter is used together with AppId. This parameter is not the image version ID.
   * 
   * @example
   * apv-bp1example****
   */
  appVersionId?: string;
  /**
   * @remarks
   * The region compatibility parameter. The destination region of the current connection resource is determined by the execution region of the task. You cannot use this parameter to switch the task region. Omit this parameter.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The type of the resource to connect to.
   * 
   * Valid values:
   * 
   * - **BUILDER**: Connects to the building environment.
   * - **VALIDATE**: Connects to the validation environment.
   * 
   * The corresponding environment must be created and in a connectable state.
   * 
   * This parameter is required.
   * 
   * @example
   * BUILDER
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the existing building or validation task. Create the task and confirm that the corresponding resources are available before calling this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * tid-bp1example****
   */
  taskId?: string;
  /**
   * @remarks
   * The actual type of the task. It must be consistent with the building or validation task corresponding to TaskId. Use the TaskType returned by GetTask. The task must also have connectable building or validation resources. You cannot obtain an authorization code for distribution or snapshot tasks that do not have connection resources.
   * 
   * Valid values:
   * 
   * - **AUTO_CREATE_IMAGE_VHD**: Automatically builds a VHD image.
   * - **RETRY_CREATE_IMAGE_VHD**: Retries building a VHD image.
   * - **AUTO_CREATE_VHD**: Automatically builds a VHD.
   * - **RETRY_VHD**: Retries building a VHD.
   * - **AUTO_VALIDATE_VHD**: Automatically validates a VHD.
   * - **RETRY_VALIDATE_VHD**: Retries validating a VHD.
   * - **APPLY_VHD_BUILDER**: Applies for a VHD application recording environment.
   * - **ADAPT_AUTO**: Automatically builds application adaptation.
   * - **ADAPT_AUTO_RETRY**: Retries automatically building application adaptation.
   * - **ADAPT_MANUAL**: Manually builds application adaptation.
   * - **ADAPT_MANUAL_RETRY**: Retries manually building application adaptation.
   * - **DESKTOP_CUSTOM_IMAGE**: Creates a custom image for a cloud desktop.
   * - **DESKTOP_CUSTOM_IMAGE_RETRY**: Retries creating a custom image for a cloud desktop.
   * - **IMAGE_MANUAL**: Manually builds an image.
   * - **IMAGE_MANUAL_RETRY**: Retries manually building an image.
   * - **IMAGE_FROM_INSTANCE**: Builds an image based on an instance.
   * - **IMAGE_FROM_INSTANCE_RETRY**: Retries building an image based on an instance.
   * - **IMAGE_DISTRIBUTE**: Distributes an image to multiple regions.
   * - **IMAGE_DISTRIBUTE_RETRY**: Retries distributing an image.
   * - **SNAPSHOT_DISTRIBUTE**: Distributes a snapshot to multiple regions.
   * - **SNAPSHOT_DISTRIBUTE_RETRY**: Retries distributing a snapshot.
   * - **SNAPSHOT_FROM_DISK**: Creates a snapshot based on a disk.
   * - **SNAPSHOT_FROM_DISK_RETRY**: Retries creating a snapshot based on a disk.
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE_MANUAL
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      bizRegionId: 'BizRegionId',
      resourceType: 'ResourceType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      bizRegionId: 'string',
      resourceType: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

