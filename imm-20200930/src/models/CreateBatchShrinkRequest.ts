// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of processing templates.
   * 
   * This parameter is required.
   */
  actionsShrink?: string;
  /**
   * @remarks
   * The input data source configuration.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The notification recipient. Multiple middleware services are supported. For details about the message format, see Asynchronous notification message. Select one of the following methods to receive messages:
   * 
   * Activate and access EventBridge in the same region as Intelligent Media Management (IMM) to promptly receive task notifications. For more information, see IMM events.
   * Activate MNS in the same region as IMM and configure a subscription.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The project name. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The service role that grants IMM the permissions to access other cloud resources, such as OSS. The default value is AliyunIMMBatchTriggerRole.
   * 
   * To use a custom service role, create a service role and grant permissions to the role in the RAM console. For more information, see [Create a service role](https://help.aliyun.com/document_detail/116800.html) and [Grant permissions to a RAM role](https://help.aliyun.com/document_detail/116147.html).
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunIMMBatchTriggerRole
   */
  serviceRole?: string;
  /**
   * @remarks
   * Custom tags used to search and filter asynchronous tasks.
   * 
   * @example
   * {"key": "val"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      actionsShrink: 'Actions',
      inputShrink: 'Input',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionsShrink: 'string',
      inputShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      serviceRole: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

