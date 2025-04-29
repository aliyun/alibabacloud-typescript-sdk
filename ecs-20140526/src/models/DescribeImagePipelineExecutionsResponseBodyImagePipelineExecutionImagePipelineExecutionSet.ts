// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSetTags } from "./DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSetTags";


export class DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSet extends $dara.Model {
  /**
   * @remarks
   * The time when the image creation task was created.
   * 
   * @example
   * 2020-11-24T06:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the image creation task.
   * 
   * @example
   * exec-5fb8facb8ed7427c****
   */
  executionId?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the image template.
   * 
   * @example
   * ip-2ze5tsl5bp6nf2b3****
   */
  imagePipelineId?: string;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * Create transition vpc "vpc-2ze70rc7093j9idu6****" success!
   */
  message?: string;
  /**
   * @remarks
   * The last modification time of the image creation task.
   * 
   * @example
   * 2020-11-25T06:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the image creation task. Valid values:
   * 
   * *   PREPARING: Resources, such as intermediate instances, are being created.
   * *   REPAIRING: The source image is being repaired.
   * *   BUILDING: The user-defined commands are being run and an image is being created.
   * *   TESTING: The user-defined test commands are being run.
   * *   DISTRIBUTING: The created image is being copied and shared.
   * *   RELEASING: The temporary resources generated during the image creation process are being released.
   * *   SUCCESS The image creation task is completed.
   * *   PARTITION_SUCCESS: The image creation task is partially completed. The image is created, but exceptions may occur when the image was copied or shared or when temporary resources were released.
   * *   FAILED: The image creation task fails.
   * *   TEST_FAILED: The image is created, but the test fails.
   * *   CANCELLING: The image creation task is being canceled.
   * *   CANCELLED: The image creation task is canceled.
   * 
   * @example
   * BUILDING
   */
  status?: string;
  /**
   * @remarks
   * The tags of the image creation task.
   */
  tags?: DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSetTags;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      executionId: 'ExecutionId',
      imageId: 'ImageId',
      imagePipelineId: 'ImagePipelineId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      executionId: 'string',
      imageId: 'string',
      imagePipelineId: 'string',
      message: 'string',
      modifiedTime: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSetTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

