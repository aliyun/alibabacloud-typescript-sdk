// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelineExecutionsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. The value of N can be from 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. The value of N can be from 1 to 20.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelineExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building task.
   * 
   * @example
   * exec-5fb8facb8ed7427c****
   */
  executionId?: string;
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
   * The number of entries to return on each page. Valid values: 1 to 500.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the `NextToken` value returned from a previous call to this operation. This parameter is not required for the first call.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the image building task. You can specify multiple values, separated by commas. Example: `BUILDING,DISTRIBUTING`. Valid values:
   * 
   * - PREPARING: The system is preparing resources, such as a temporary transit instance.
   * 
   * - REPAIRING: The system is repairing the source image.
   * 
   * - BUILDING: The system is building the image. This includes executing user-defined commands and creating the image.
   * 
   * - TESTING: The system is testing the created image by running user-defined test commands.
   * 
   * - DISTRIBUTING: The system is distributing the image. This includes copying and sharing the image.
   * 
   * - RELEASING: The system is releasing temporary resources generated during the build process.
   * 
   * - SUCCESS: The task completed successfully.
   * 
   * - PARTITION_SUCCESS: The task is partially successful. The image was created, but an error may have occurred during distribution or resource cleanup.
   * 
   * - FAILED: The image building task failed.
   * 
   * - TEST_FAILED: The image was created successfully, but it failed the user-defined tests.
   * 
   * - CANCELLING: The system is canceling the image building task.
   * 
   * - CANCELLED: The image building task was canceled.
   * 
   * > If you omit this parameter, the operation returns image building tasks of all statuses.
   * 
   * @example
   * BUILDING
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeImagePipelineExecutionsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      imagePipelineId: 'ImagePipelineId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      imagePipelineId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeImagePipelineExecutionsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

