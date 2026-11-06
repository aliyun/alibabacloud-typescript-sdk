// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to connect to. When specifying this parameter, you must also provide the matching AppVersionId. If omitted, the application configured in the creation or validation environment is used.
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
   * The type of resource to connect to.
   * 
   * - **BUILDER**: Connects to the creation environment.
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
   * The ID of the existing creation or validation task. Create the task and confirm that the corresponding resources are available before calling this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * tid-bp1example****
   */
  taskId?: string;
  /**
   * @remarks
   * The actual task type. It must match the creation or validation task corresponding to the TaskId. Use the TaskType returned by GetTask. The task must also have connectable creation or validation resources. You cannot obtain an authorization code for distribution or snapshot tasks that do not have connection resources.
   * 
   * Recognized task types:
   * 
   * - **AUTO_CREATE_IMAGE_VHD**: Automatically creates a VHD image.
   * - **RETRY_CREATE_IMAGE_VHD**: Retries VHD image creation.
   * - **AUTO_CREATE_VHD**: Automatically creates a VHD.
   * - **RETRY_VHD**: Retries VHD creation.
   * - **AUTO_VALIDATE_VHD**: Automatically validates a VHD.
   * - **RETRY_VALIDATE_VHD**: Retries VHD validation.
   * - **APPLY_VHD_BUILDER**: Applies for a VHD application recording environment.
   * - **ADAPT_AUTO**: Automatically creates application adaptation.
   * - **ADAPT_AUTO_RETRY**: Retries automatic application adaptation creation.
   * - **ADAPT_MANUAL**: Manually creates application adaptation.
   * - **ADAPT_MANUAL_RETRY**: Retries manual application adaptation creation.
   * - **DESKTOP_CUSTOM_IMAGE**: Creates a custom image for cloud desktops.
   * - **DESKTOP_CUSTOM_IMAGE_RETRY**: Retries custom image creation for cloud desktops.
   * - **IMAGE_MANUAL**: Manually creates an image.
   * - **IMAGE_MANUAL_RETRY**: Retries manual image creation.
   * - **IMAGE_FROM_INSTANCE**: Creates an image based on an instance.
   * - **IMAGE_FROM_INSTANCE_RETRY**: Retries image creation based on an instance.
   * - **IMAGE_DISTRIBUTE**: Distributes an image to multiple regions.
   * - **IMAGE_DISTRIBUTE_RETRY**: Retries image distribution.
   * - **SNAPSHOT_DISTRIBUTE**: Distributes a snapshot to multiple regions.
   * - **SNAPSHOT_DISTRIBUTE_RETRY**: Retries snapshot distribution.
   * - **SNAPSHOT_FROM_DISK**: Creates a snapshot based on a disk.
   * - **SNAPSHOT_FROM_DISK_RETRY**: Retries snapshot creation based on a disk.
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

