// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTriggerInput extends $dara.Model {
  /**
   * @remarks
   * The description of the trigger.
   * 
   * @example
   * trigger for test
   */
  description?: string;
  /**
   * @remarks
   * The RAM role that is used by the event source such as Object Storage Service (OSS) to invoke the function.
   * 
   * @example
   * acs:ram::1234567890:role/fc-test
   */
  invocationRole?: string;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the trigger event source.
   * 
   * @example
   * acs:oss:cn-shanghai:12345:mybucket
   */
  sourceArn?: string;
  /**
   * @remarks
   * The configurations of the trigger. The configurations vary based on the trigger type. The following items list the data structures for different types of triggers:
   * 
   * *   OSS triggers: [OSSTriggerConfig](https://help.aliyun.com/document_detail/2766465.html).
   * *   Simple Log Service trigger: [LogTriggerConfig](https://help.aliyun.com/document_detail/2618711.html).
   * *   Time triggers: [TimerTriggerConfig](https://help.aliyun.com/document_detail/2754638.html).
   * *   HTTP triggers: [HTTPTriggerConfig](https://help.aliyun.com/document_detail/2766461.html).
   * *   Tablestore triggers: Specify the **SourceArnm** parameter and leave this parameter empty.
   * *   Alibaba Cloud CDN event triggers: [CDNEventsTriggerConfig](https://help.aliyun.com/document_detail/2766462.html).
   * *   MNS topic triggers: [MnsTopicTriggerConfig](https://help.aliyun.com/document_detail/2766464.html).
   * *   EventBridge-based triggers: [EventBridgeTriggerConfig](https://help.aliyun.com/document_detail/2766447.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"events":["oss:ObjectCreated:*"],"filter":{"key":{"prefix":"/prefix","suffix":".zip"}}}
   */
  triggerConfig?: string;
  /**
   * @remarks
   * The name of the trigger. The name can contain only letters, digits, hyphens (-), and underscores (_). The name must be 1 to 128 characters in length and cannot start with a digit or a hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * oss_create_object_demo
   */
  triggerName?: string;
  /**
   * @remarks
   * The type of the trigger. Valid values:
   * 
   * *   **oss**: OSS event triggers. For more information, see [Overview](https://help.aliyun.com/document_detail/2513613.html).
   * *   **log**: Simple Log Service triggers. For more information, see [Simple Log Service triggers](https://help.aliyun.com/document_detail/2513638.html).
   * *   **timer**: time triggers. For more information, see [Time triggers](https://help.aliyun.com/document_detail/2513611.html).
   * *   **http**: HTTP triggers. For more information, see [Overview](https://help.aliyun.com/document_detail/2513634.html).
   * *   **tablestore**: Tablestore triggers. For more information, see [Tablestore triggers](https://help.aliyun.com/document_detail/2513640.html).
   * *   **cdn_events**: CDN event triggers. For more information, see [Overview](https://help.aliyun.com/document_detail/2513636.html).
   * *   **mns_topic**: Message Service (MNS) topic triggers. For more information, see [MNS topic triggers](https://help.aliyun.com/document_detail/2513641.html).
   * *   **eventbridge**: EventBridge-based triggers.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      invocationRole: 'invocationRole',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      invocationRole: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerName: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

