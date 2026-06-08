// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentRequestMetadataAttachments extends $dara.Model {
  /**
   * @example
   * acs:eventbridge:cn-hangzhou:12345:eventhouse/system-rocketmq/namespace/rmq-cn-xxx/table/order
   */
  arn?: string;
  /**
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

export class UpdateAgentRequestMetadata extends $dara.Model {
  attachments?: UpdateAgentRequestMetadataAttachments[];
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': UpdateAgentRequestMetadataAttachments },
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

export class UpdateAgentRequest extends $dara.Model {
  /**
   * @example
   * TF-CreateRule-1652253755-aa33f762-7e99-4aee-bd27-d3370afa5625
   */
  clientToken?: string;
  description?: string;
  metadata?: UpdateAgentRequestMetadata;
  /**
   * @example
   * my-agent
   */
  name?: string;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      metadata: 'Metadata',
      name: 'Name',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      metadata: UpdateAgentRequestMetadata,
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

