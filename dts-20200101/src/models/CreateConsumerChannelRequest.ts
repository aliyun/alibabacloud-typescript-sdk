// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group. The name can be up to 128 characters in length. We recommend that you use an informative name for easy identification.
   * 
   * This parameter is required.
   * 
   * @example
   * 订阅组A
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The password of the consumer group.
   * 
   * *   A password must contain two or more of the following characters: uppercase letters, lowercase letters, digits, and special characters.
   * *   A password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test123456
   */
  consumerGroupPassword?: string;
  /**
   * @remarks
   * The username of the consumer group.
   * 
   * *   A username must contain one or more of the following characters: uppercase letters, lowercase letters, digits, and underscores (_).
   * *   A username cannot exceed 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * dtstest
   */
  consumerGroupUserName?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * >  You must specify at least one of the **DtsInstanceId** and **DtsJobId**. parameters.
   * 
   * @example
   * dtsboss6pn1w******
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the change tracking task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * >  You must specify at least one of the **DtsInstanceId** and **DtsJobId**. parameters.
   * 
   * @example
   * boss6pn1w******
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
   * rg-aek2zx4uizich7y
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
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

