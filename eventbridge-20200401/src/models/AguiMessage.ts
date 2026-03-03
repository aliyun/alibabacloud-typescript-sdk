// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AguiMessageMetadataAttachments extends $dara.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AguiMessageMetadata extends $dara.Model {
  attachments?: AguiMessageMetadataAttachments;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: AguiMessageMetadataAttachments,
    };
  }

  validate() {
    if(this.attachments && typeof (this.attachments as any).validate === 'function') {
      (this.attachments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AguiMessageToolCallsFunction extends $dara.Model {
  arguments?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AguiMessageToolCalls extends $dara.Model {
  function?: AguiMessageToolCallsFunction;
  id?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: AguiMessageToolCallsFunction,
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AguiMessage extends $dara.Model {
  content?: string;
  id?: string;
  metadata?: AguiMessageMetadata;
  role?: string;
  toolCallId?: string;
  toolCalls?: AguiMessageToolCalls[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      metadata: 'Metadata',
      role: 'Role',
      toolCallId: 'ToolCallId',
      toolCalls: 'ToolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      metadata: AguiMessageMetadata,
      role: 'string',
      toolCallId: 'string',
      toolCalls: { 'type': 'array', 'itemType': AguiMessageToolCalls },
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

