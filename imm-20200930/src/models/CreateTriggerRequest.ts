// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTriggerRequestActions } from "./CreateTriggerRequestActions";
import { Input } from "./Input";
import { CreateTriggerRequestNotification } from "./CreateTriggerRequestNotification";


export class CreateTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The templates.
   * 
   * This parameter is required.
   */
  actions?: CreateTriggerRequestActions[];
  /**
   * @remarks
   * The data source configurations.
   * 
   * This parameter is required.
   */
  input?: Input;
  /**
   * @remarks
   * The notification settings. The operation supports multiple messaging middleware options. For more information about notification messages, see Asynchronous message examples. You can use one of the following methods to receive notification messages:
   * 
   * In the region in which the IMM project is located, use EventBridge to receive task notifications. For more information, see IMM events. In the region in which the IMM project is located, configure a Simple Message Queue (SMQ) subscription to receive task notifications.
   */
  notification?: CreateTriggerRequestNotification;
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
   * {"key":"val"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      input: 'Input',
      notification: 'Notification',
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': CreateTriggerRequestActions },
      input: Input,
      notification: CreateTriggerRequestNotification,
      projectName: 'string',
      serviceRole: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

