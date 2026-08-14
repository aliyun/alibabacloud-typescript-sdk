// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConsumerChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group. You can call [DescribeConsumerChannel](https://help.aliyun.com/document_detail/264169.html) to query the consumer group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsor2y66j4219****
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The new name of the consumer group. The name can be up to 128 characters in length. Specify a descriptive name for easy identification.
   * 
   * @example
   * 订阅组B
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The new password of the consumer group account.
   * 
   * - The password must contain characters from at least two of the following categories: uppercase letters, lowercase letters, digits, and special characters.
   * - The password must be 8 to 32 characters in length.
   * 
   * @example
   * Test123456
   */
  consumerGroupPassword?: string;
  /**
   * @remarks
   * The new username of the consumer group account.
   * 
   * - The username can contain one or more types of the following characters: uppercase letters, lowercase letters, digits, and underscores (_).
   * - The username can be up to 16 characters in length.
   * 
   * @example
   * dtstest
   */
  consumerGroupUserName?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the instance ID.
   * > You must specify either **DtsInstanceId** or **DtsJobId**.
   * 
   * @example
   * dtsboss6pn1w73****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the change tracking task. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the task ID.
   * > You must specify either **DtsInstanceId** or **DtsJobId**.
   * 
   * @example
   * boss6pn1w73****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The region ID of the DTS change tracking instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
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

