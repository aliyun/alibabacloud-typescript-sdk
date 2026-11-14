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
   * The type of the resource to connect to. Valid values:
   * 
   * - **BUILDER**: connect to the creation environment
   * - **VALIDATE**: connect to the validation environment
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
   * The actual task type. It must match the creation or validation task corresponding to the TaskId. Use the TaskType returned by GetTask. The task must also have connectable creation or validation resources. You cannot obtain an authorization code for distribution or snapshot tasks that do not have connection resources. Valid values:
   * 
   * - **AUTO_CREATE_IMAGE_VHD**: automatically create a VHD image
   * - **RETRY_CREATE_IMAGE_VHD**: retry VHD image creation
   * - **AUTO_CREATE_VHD**: automatically create a VHD
   * - **RETRY_VHD**: retry VHD creation
   * - **AUTO_VALIDATE_VHD**: automatically validate a VHD
   * - **RETRY_VALIDATE_VHD**: retry VHD validation
   * - **APPLY_VHD_BUILDER**: apply for a VHD application recording environment
   * - **ADAPT_AUTO**: automatically create application adaptation
   * - **ADAPT_AUTO_RETRY**: retry automatic application adaptation creation
   * - **ADAPT_MANUAL**: manually create application adaptation
   * - **ADAPT_MANUAL_RETRY**: retry manual application adaptation creation
   * - **DESKTOP_CUSTOM_IMAGE**: create a custom image for cloud desktop
   * - **DESKTOP_CUSTOM_IMAGE_RETRY**: retry custom image creation for cloud desktop
   * - **IMAGE_MANUAL**: manually create an image
   * - **IMAGE_MANUAL_RETRY**: retry manual image creation
   * - **IMAGE_FROM_INSTANCE**: create an image from an instance
   * - **IMAGE_FROM_INSTANCE_RETRY**: retry image creation from an instance
   * - **IMAGE_DISTRIBUTE**: distribute an image to multiple regions
   * - **IMAGE_DISTRIBUTE_RETRY**: retry image distribution
   * - **SNAPSHOT_DISTRIBUTE**: distribute a snapshot to multiple regions
   * - **SNAPSHOT_DISTRIBUTE_RETRY**: retry snapshot distribution
   * - **SNAPSHOT_FROM_DISK**: create a snapshot from a disk
   * - **SNAPSHOT_FROM_DISK_RETRY**: retry snapshot creation from a disk
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

