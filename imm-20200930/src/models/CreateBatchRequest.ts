// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Input } from "./Input";
import { MNS } from "./Mns";
import { FastFailPolicy } from "./FastFailPolicy";


export class CreateBatchRequestActions extends $dara.Model {
  /**
   * @remarks
   * The fast-fail policy configuration.
   */
  fastFailPolicy?: FastFailPolicy;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * doc/convert
   */
  name?: string;
  /**
   * @remarks
   * A list of template parameters.
   */
  parameters?: string[];
  static names(): { [key: string]: string } {
    return {
      fastFailPolicy: 'FastFailPolicy',
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastFailPolicy: FastFailPolicy,
      name: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.fastFailPolicy && typeof (this.fastFailPolicy as any).validate === 'function') {
      (this.fastFailPolicy as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchRequestNotification extends $dara.Model {
  /**
   * @remarks
   * The parameters for MNS notifications.
   */
  MNS?: MNS;
  static names(): { [key: string]: string } {
    return {
      MNS: 'MNS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MNS: MNS,
    };
  }

  validate() {
    if(this.MNS && typeof (this.MNS as any).validate === 'function') {
      (this.MNS as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchRequest extends $dara.Model {
  /**
   * @remarks
   * A list of processing templates.
   * 
   * This parameter is required.
   */
  actions?: CreateBatchRequestActions[];
  /**
   * @remarks
   * The input data source configuration.
   * 
   * This parameter is required.
   */
  input?: Input;
  /**
   * @remarks
   * The notification recipient. Multiple middleware services are supported. For details about the message format, see Asynchronous notification message. Select one of the following methods to receive messages:
   * 
   * Activate and access EventBridge in the same region as Intelligent Media Management (IMM) to promptly receive task notifications. For more information, see IMM events.
   * Activate MNS in the same region as IMM and configure a subscription.
   */
  notification?: CreateBatchRequestNotification;
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
      actions: { 'type': 'array', 'itemType': CreateBatchRequestActions },
      input: Input,
      notification: CreateBatchRequestNotification,
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

