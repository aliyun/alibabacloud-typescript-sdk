// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddContextsRequestItems extends $dara.Model {
  /**
   * @remarks
   * The agent ID of the application.
   * 
   * @example
   * 952730733889060865
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * mm_480d961a1b5e4efe84603f4cbc0f
   */
  appId?: string;
  /**
   * @remarks
   * The categories.
   */
  categories?: string[];
  /**
   * @remarks
   * The content.
   * 
   * @example
   * You are a conversation assistant.
   */
  content?: string;
  /**
   * @remarks
   * The custom instructions.
   * 
   * @example
   * Your custom instructions here
   */
  customInstructions?: string;
  /**
   * @remarks
   * The experience.
   * 
   * @example
   * {
   * 	"taskType": "troubleshooting",
   * 	"complexity": "medium",
   * 	"confidence": 0.95
   * }
   */
  experience?: { [key: string]: any };
  /**
   * @remarks
   * The expiration date.
   * 
   * @example
   * 1731231212334396
   */
  expirationDate?: string;
  /**
   * @remarks
   * The mutability.
   * 
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @remarks
   * The inference.
   * 
   * @example
   * true
   */
  infer?: boolean;
  /**
   * @remarks
   * The labels.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The messages.
   */
  messages?: { [key: string]: any }[];
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {"sessionId":"test_session_001"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * jr-80ded1d6953c64ea
   */
  runId?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1774578167
   */
  timestamp?: number;
  /**
   * @remarks
   * The trigger condition.
   * 
   * @example
   * Identify and troubleshoot SLs issues
   */
  triggerCondition?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * test_user_001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      appId: 'appId',
      categories: 'categories',
      content: 'content',
      customInstructions: 'customInstructions',
      experience: 'experience',
      expirationDate: 'expirationDate',
      immutable: 'immutable',
      infer: 'infer',
      labels: 'labels',
      messages: 'messages',
      metadata: 'metadata',
      runId: 'runId',
      timestamp: 'timestamp',
      triggerCondition: 'triggerCondition',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      categories: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      customInstructions: 'string',
      experience: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      expirationDate: 'string',
      immutable: 'boolean',
      infer: 'boolean',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messages: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      runId: 'string',
      timestamp: 'number',
      triggerCondition: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(this.experience) {
      $dara.Model.validateMap(this.experience);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContextsRequest extends $dara.Model {
  /**
   * @remarks
   * The context type.
   * 
   * This parameter is required.
   * 
   * @example
   * memory
   */
  contextType?: string;
  /**
   * @remarks
   * The context information.
   * 
   * This parameter is required.
   */
  items?: AddContextsRequestItems[];
  /**
   * @remarks
   * The memory type.
   * 
   * @example
   * short
   */
  memoryType?: string;
  static names(): { [key: string]: string } {
    return {
      contextType: 'contextType',
      items: 'items',
      memoryType: 'memoryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextType: 'string',
      items: { 'type': 'array', 'itemType': AddContextsRequestItems },
      memoryType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

