// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConsumerChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group. You can call the [DescribeConsumerChannel](https://help.aliyun.com/document_detail/264169.html) operation to query the consumer group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsor2y66j4219****
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The name of the consumer group. The name cannot exceed 128 characters in length. We recommend that you use an informative name for easy identification.
   * 
   * @example
   * dtstest
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The new password of the consumer group.
   * 
   * *   A password must contain two or more of the following characters: uppercase letters, lowercase letters, digits, and special characters.
   * *   A password must be 8 to 32 characters in length.
   * 
   * @example
   * Test123456
   */
  consumerGroupPassword?: string;
  /**
   * @remarks
   * The new username of the consumer group.
   * 
   * *   A username can contain one or more of the following character types: uppercase letters, lowercase letters, digits, and underscores (_).
   * *   A username cannot exceed 16 characters in length.
   * 
   * @example
   * dtstest
   */
  consumerGroupUserName?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * >  You must specify at least one of the **DtsInstanceId** and **DtsJobId** parameters.
   * 
   * @example
   * dtsboss6pn1w73****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the change tracking task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * >  You must specify at least one of the **DtsInstanceId** and **DtsJobId** parameters.
   * 
   * @example
   * boss6pn1w73****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The ID of the region where the change tracking instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'ConsumerGroupId',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupPassword: 'ConsumerGroupPassword',
      consumerGroupUserName: 'ConsumerGroupUserName',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      consumerGroupName: 'string',
      consumerGroupPassword: 'string',
      consumerGroupUserName: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

