// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentRequestMetadataAttachments extends $dara.Model {
  /**
   * @remarks
   * The ARN of the attached metadata object.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:12345:eventhouse/system-rocketmq/namespace/rmq-cn-XXX/table/order
   */
  arn?: string;
  /**
   * @remarks
   * The object type of the attached metadata.
   * 
   * @example
   * inner-resource/event-table
   */
  mimeType?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      mimeType: 'MimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      mimeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentRequestMetadata extends $dara.Model {
  /**
   * @remarks
   * The array of attached metadata objects.
   */
  attachments?: CreateAgentRequestMetadataAttachments[];
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': CreateAgentRequestMetadataAttachments },
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event bus.
   * 
   * @example
   * 连接配置描述信息
   */
  description?: string;
  /**
   * @remarks
   * The associated metadata.
   */
  metadata?: CreateAgentRequestMetadata;
  /**
   * @remarks
   * The name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * You are an IoT data analytics assistant...
   * 
   * @example
   * 我想要她，你这样增加请求头获取用户IP CF-Connecting-IP%3B
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metadata: 'Metadata',
      name: 'Name',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metadata: CreateAgentRequestMetadata,
      name: 'string',
      prompt: 'string',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

