// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelineExecutionsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. Valid values of N: 1 to 20.
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
   * The ID of the image build task.
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
   * The maximum number of entries per page for paging. Valid values: 1 to 500.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The status of the image build task. You can specify multiple values at the same time. Separate multiple values with commas (,). Example: `BUILDING,DISTRIBUTING`. Valid values:
   * 
   * - PREPARING: The task is being prepared. Resources such as the temporary intermediate instance are being created.
   * - REPAIRING: The task is being repaired. The source image is being repaired.
   * - BUILDING: The task is being built. Custom commands are being run and the image is being created.
   * - TESTING: The task is being tested. Custom test commands are being run.
   * - DISTRIBUTING: The task is being distributed. Image copying and sharing are being performed.
   * - RELEASING: Resources are being reclaimed. Temporary resources generated during the build process are being released.
   * - SUCCESS: The task succeeded.
   * - PARTITION_SUCCESS: The task partially succeeded. The image was built, but exceptions may have occurred during distribution or resource cleanup.
   * - FAILED: The task failed.
   * - TEST_FAILED: The test failed. The image was created, but the test failed.
   * - CANCELLING: The task is being canceled.
   * - CANCELLED: The task was canceled.
   * 
   * > If this parameter is empty, image build tasks in all states are queried.
   * 
   * @example
   * BUILDING
   */
  status?: string;
  /**
   * @remarks
   * The tags.
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

