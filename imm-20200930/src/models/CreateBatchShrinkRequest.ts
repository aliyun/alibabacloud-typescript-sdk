// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The templates.
   * 
   * This parameter is required.
   */
  actionsShrink?: string;
  /**
   * @remarks
   * The data source configurations.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The notification settings. The operation supports multiple messaging middleware options. For more information about notification messages, see Asynchronous message examples. You can use one of the following methods to receive notification messages:
   * 
   * In the region in which the IMM project is located, use EventBridge to receive task notifications. For more information, see IMM events. In the region in which the IMM project is located, configure a Simple Message Queue (SMQ) subscription to receive task notifications.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The service role. IMM assumes the service role so that it can access resources in other cloud services, such as OSS. Default value: AliyunIMMBatchTriggerRole.
   * 
   * You can also create a custom service role in the RAM console and grant the required permissions to the role based on your business requirements. For more information, see [Create a regular service role](https://help.aliyun.com/document_detail/116800.html) and [Grant permissions to a role](https://help.aliyun.com/document_detail/116147.html).
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunIMMDefaultRole
   */
  serviceRole?: string;
  /**
   * @remarks
   * The custom tags. You can search for or filter asynchronous tasks by custom tag.
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

