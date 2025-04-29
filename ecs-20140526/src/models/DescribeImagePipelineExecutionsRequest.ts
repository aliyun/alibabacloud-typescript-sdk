// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagePipelineExecutionsRequestTag } from "./DescribeImagePipelineExecutionsRequestTag";


export class DescribeImagePipelineExecutionsRequest extends $dara.Model {
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
   * The ID of the image template.
   * 
   * @example
   * ip-2ze5tsl5bp6nf2b3****
   */
  imagePipelineId?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 500.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The status of the image creation task. You can specify multiple values. Separate the values with commas (,). Example: `BUILDING,DISTRIBUTING`. Valid values:
   * 
   * *   PREPARING: Resources, such as the intermediate instance, are being created.
   * *   REPAIRING: The source image is being repaired.
   * *   BUILDING: The user-defined commands are being run and an image is being created.
   * *   TESTING: The user-defined test commands are being run.
   * *   DISTRIBUTING: The created image is being copied and shared.
   * *   RELEASING: The temporary resources generated during the image creation process are being released.
   * *   SUCCESS: The image creation task is completed.
   * *   PARTITION_SUCCESS: The image creation task is partially completed. The image is created, but exceptions may occur when the image was copied or shared or when temporary resources were released.
   * *   FAILED: The image creation task fails.
   * *   TEST_FAILED: The image is created, but the test fails.
   * *   CANCELLING: The image creation task is being canceled.
   * *   CANCELLED: The image creation task is canceled.
   * 
   * >  If you leave this parameter empty, all image creation tasks are queried regardless of task status.
   * 
   * @example
   * BUILDING
   */
  status?: string;
  /**
   * @remarks
   * The tags of the image creation task.
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

