// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivatePerspectiveRequest extends $tea.Model {
  perspectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      perspectiveId: 'PerspectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perspectiveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivatePerspectiveResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivatePerspectiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActivatePerspectiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActivatePerspectiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSynonymRequest extends $tea.Model {
  coreWordName?: string;
  synonym?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordName: 'CoreWordName',
      synonym: 'Synonym',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordName: 'string',
      synonym: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSynonymResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSynonymResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSynonymResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSynonymResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendEntityMemberRequest extends $tea.Model {
  entityId?: number;
  applyType?: string;
  member?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      applyType: 'ApplyType',
      member: 'Member',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      applyType: 'string',
      member: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendEntityMemberResponseBody extends $tea.Model {
  entityId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendEntityMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppendEntityMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppendEntityMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRequest extends $tea.Model {
  instanceId?: string;
  utterance?: string;
  sessionId?: string;
  businessScope?: string;
  recommendNum?: number;
  perspective?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      utterance: 'Utterance',
      sessionId: 'SessionId',
      businessScope: 'BusinessScope',
      recommendNum: 'RecommendNum',
      perspective: 'Perspective',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      utterance: 'string',
      sessionId: 'string',
      businessScope: 'string',
      recommendNum: 'number',
      perspective: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResponseBody extends $tea.Model {
  requestId?: string;
  associate?: AssociateResponseBodyAssociate[];
  sessionId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      associate: 'Associate',
      sessionId: 'SessionId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      associate: { 'type': 'array', 'itemType': AssociateResponseBodyAssociate },
      sessionId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequest extends $tea.Model {
  instanceId?: string;
  sessionId?: string;
  knowledgeId?: string;
  senderId?: string;
  senderNick?: string;
  tag?: string;
  utterance?: string;
  recommend?: boolean;
  recommendNum?: number;
  intentName?: string;
  defaultPerspective?: string;
  businessScope?: string;
  vendorParam?: string;
  emotion?: boolean;
  sandBox?: boolean;
  perspective?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sessionId: 'SessionId',
      knowledgeId: 'KnowledgeId',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      tag: 'Tag',
      utterance: 'Utterance',
      recommend: 'Recommend',
      recommendNum: 'RecommendNum',
      intentName: 'IntentName',
      defaultPerspective: 'DefaultPerspective',
      businessScope: 'BusinessScope',
      vendorParam: 'VendorParam',
      emotion: 'Emotion',
      sandBox: 'SandBox',
      perspective: 'Perspective',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sessionId: 'string',
      knowledgeId: 'string',
      senderId: 'string',
      senderNick: 'string',
      tag: 'string',
      utterance: 'string',
      recommend: 'boolean',
      recommendNum: 'number',
      intentName: 'string',
      defaultPerspective: 'string',
      businessScope: 'string',
      vendorParam: 'string',
      emotion: 'boolean',
      sandBox: 'boolean',
      perspective: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBody extends $tea.Model {
  messages?: ChatResponseBodyMessages[];
  requestId?: string;
  tag?: string;
  sessionId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      requestId: 'RequestId',
      tag: 'Tag',
      sessionId: 'SessionId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': ChatResponseBodyMessages },
      requestId: 'string',
      tag: 'string',
      sessionId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBotRequest extends $tea.Model {
  languageCode?: string;
  timeZone?: string;
  name?: string;
  avatar?: string;
  introduction?: string;
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      languageCode: 'LanguageCode',
      timeZone: 'TimeZone',
      name: 'Name',
      avatar: 'Avatar',
      introduction: 'Introduction',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languageCode: 'string',
      timeZone: 'string',
      name: 'string',
      avatar: 'string',
      introduction: 'string',
      robotType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBotResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCategoryRequest extends $tea.Model {
  parentCategoryId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      parentCategoryId: 'ParentCategoryId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentCategoryId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCategoryResponseBody extends $tea.Model {
  categoryId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCoreWordRequest extends $tea.Model {
  coreWordName?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordName: 'CoreWordName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCoreWordResponseBody extends $tea.Model {
  requestId?: string;
  coreWordCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      coreWordCode: 'CoreWordCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      coreWordCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCoreWordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCoreWordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCoreWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogRequest extends $tea.Model {
  instanceId?: string;
  dialogName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      dialogName: 'DialogName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      dialogName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogResponseBody extends $tea.Model {
  requestId?: string;
  dialogId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dialogId: 'DialogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dialogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDialogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDialogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityRequest extends $tea.Model {
  dialogId?: number;
  entityName?: string;
  entityType?: string;
  regex?: string;
  members?: string;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      regex: 'Regex',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      entityName: 'string',
      entityType: 'string',
      regex: 'string',
      members: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityResponseBody extends $tea.Model {
  entityId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentRequest extends $tea.Model {
  intentDefinition?: string;
  dialogId?: number;
  static names(): { [key: string]: string } {
    return {
      intentDefinition: 'IntentDefinition',
      dialogId: 'DialogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentDefinition: 'string',
      dialogId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentResponseBody extends $tea.Model {
  requestId?: string;
  intentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      intentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeRequest extends $tea.Model {
  knowledge?: string;
  static names(): { [key: string]: string } {
    return {
      knowledge: 'Knowledge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeResponseBody extends $tea.Model {
  requestId?: string;
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateKnowledgeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateKnowledgeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBotRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBotResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategoryRequest extends $tea.Model {
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategoryResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCoreWordRequest extends $tea.Model {
  coreWordName?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordName: 'CoreWordName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCoreWordResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCoreWordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCoreWordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCoreWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDialogRequest extends $tea.Model {
  dialogId?: number;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDialogResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDialogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDialogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDialogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityRequest extends $tea.Model {
  entityId?: number;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityResponseBody extends $tea.Model {
  entityId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntentRequest extends $tea.Model {
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntentResponseBody extends $tea.Model {
  requestId?: string;
  intentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      intentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKnowledgeRequest extends $tea.Model {
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKnowledgeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKnowledgeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteKnowledgeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteKnowledgeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBotRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBotResponseBody extends $tea.Model {
  languageCode?: string;
  timeZone?: string;
  requestId?: string;
  introduction?: string;
  instanceId?: string;
  categories?: DescribeBotResponseBodyCategories[];
  createTime?: string;
  avatar?: string;
  logo?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      languageCode: 'LanguageCode',
      timeZone: 'TimeZone',
      requestId: 'RequestId',
      introduction: 'Introduction',
      instanceId: 'InstanceId',
      categories: 'Categories',
      createTime: 'CreateTime',
      avatar: 'Avatar',
      logo: 'Logo',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languageCode: 'string',
      timeZone: 'string',
      requestId: 'string',
      introduction: 'string',
      instanceId: 'string',
      categories: { 'type': 'array', 'itemType': DescribeBotResponseBodyCategories },
      createTime: 'string',
      avatar: 'string',
      logo: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryRequest extends $tea.Model {
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryResponseBody extends $tea.Model {
  categoryId?: number;
  requestId?: string;
  parentCategoryId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      requestId: 'RequestId',
      parentCategoryId: 'ParentCategoryId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      requestId: 'string',
      parentCategoryId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCoreWordRequest extends $tea.Model {
  coreWordName?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordName: 'CoreWordName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCoreWordResponseBody extends $tea.Model {
  coreWordName?: string;
  synonyms?: string[];
  modifyTime?: string;
  requestId?: string;
  createTime?: string;
  coreWordCode?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordName: 'CoreWordName',
      synonyms: 'Synonyms',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      coreWordCode: 'CoreWordCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordName: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
      modifyTime: 'string',
      requestId: 'string',
      createTime: 'string',
      coreWordCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCoreWordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCoreWordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCoreWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogRequest extends $tea.Model {
  dialogId?: number;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogResponseBody extends $tea.Model {
  status?: number;
  modifyTime?: string;
  description?: string;
  requestId?: string;
  createTime?: string;
  createUserId?: string;
  dialogId?: number;
  createUserName?: string;
  isOnline?: boolean;
  dialogName?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  isSampleDialog?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      description: 'Description',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      dialogId: 'DialogId',
      createUserName: 'CreateUserName',
      isOnline: 'IsOnline',
      dialogName: 'DialogName',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      isSampleDialog: 'IsSampleDialog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      modifyTime: 'string',
      description: 'string',
      requestId: 'string',
      createTime: 'string',
      createUserId: 'string',
      dialogId: 'number',
      createUserName: 'string',
      isOnline: 'boolean',
      dialogName: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      isSampleDialog: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDialogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDialogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerspectiveRequest extends $tea.Model {
  perspectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      perspectiveId: 'PerspectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perspectiveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerspectiveResponseBody extends $tea.Model {
  status?: number;
  perspectiveCode?: string;
  modifyTime?: string;
  requestId?: string;
  selfDefine?: boolean;
  createTime?: string;
  modifyUserName?: string;
  perspectiveId?: string;
  createUserName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      perspectiveCode: 'PerspectiveCode',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      selfDefine: 'SelfDefine',
      createTime: 'CreateTime',
      modifyUserName: 'ModifyUserName',
      perspectiveId: 'PerspectiveId',
      createUserName: 'CreateUserName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      perspectiveCode: 'string',
      modifyTime: 'string',
      requestId: 'string',
      selfDefine: 'boolean',
      createTime: 'string',
      modifyUserName: 'string',
      perspectiveId: 'string',
      createUserName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerspectiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePerspectiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePerspectiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDialogFlowRequest extends $tea.Model {
  dialogId?: number;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDialogFlowResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDialogFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableDialogFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableDialogFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableKnowledgeRequest extends $tea.Model {
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableKnowledgeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableKnowledgeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableKnowledgeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableKnowledgeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackRequest extends $tea.Model {
  instanceId?: string;
  sessionId?: string;
  messageId?: string;
  feedback?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sessionId: 'SessionId',
      messageId: 'MessageId',
      feedback: 'Feedback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sessionId: 'string',
      messageId: 'string',
      feedback: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackResponseBody extends $tea.Model {
  requestId?: string;
  feedback?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      feedback: 'Feedback',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      feedback: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FeedbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotChatDataRequest extends $tea.Model {
  cubeId?: string;
  measures?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      measures: 'Measures',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      measures: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotChatDataResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotChatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBotChatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBotChatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotDsStatDataRequest extends $tea.Model {
  cubeId?: string;
  measures?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      measures: 'Measures',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      measures: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotDsStatDataResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotDsStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBotDsStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBotDsStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotKnowledgeStatDataRequest extends $tea.Model {
  cubeId?: string;
  measures?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      measures: 'Measures',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      measures: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotKnowledgeStatDataResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotKnowledgeStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBotKnowledgeStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBotKnowledgeStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotSessionDataRequest extends $tea.Model {
  cubeId?: string;
  measures?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      measures: 'Measures',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      measures: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotSessionDataResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotSessionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBotSessionDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBotSessionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationListRequest extends $tea.Model {
  instanceId?: string;
  sessionId?: string;
  senderId?: string;
  startDate?: string;
  endDate?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sessionId: 'SessionId',
      senderId: 'SenderId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sessionId: 'string',
      senderId: 'string',
      startDate: 'string',
      endDate: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationListResponseBody extends $tea.Model {
  messages?: { [key: string]: any }[];
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConversationListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConversationListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotChatHistorysRequest extends $tea.Model {
  cubeId?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  dimensions?: string;
  isDetail?: boolean;
  orders?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      dimensions: 'Dimensions',
      isDetail: 'IsDetail',
      orders: 'Orders',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      dimensions: 'string',
      isDetail: 'boolean',
      orders: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotChatHistorysResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotChatHistorysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBotChatHistorysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBotChatHistorysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotColdDsDatasRequest extends $tea.Model {
  cubeId?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  dimensions?: string;
  filters?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      dimensions: 'Dimensions',
      filters: 'Filters',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      dimensions: 'string',
      filters: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotColdDsDatasResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotColdDsDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBotColdDsDatasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBotColdDsDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotColdKnowledgesRequest extends $tea.Model {
  cubeId?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  dimensions?: string;
  filters?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      dimensions: 'Dimensions',
      filters: 'Filters',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      dimensions: 'string',
      filters: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotColdKnowledgesResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotColdKnowledgesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBotColdKnowledgesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBotColdKnowledgesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotDsDetailsRequest extends $tea.Model {
  cubeId?: string;
  measures?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  dimensions?: string;
  orders?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      measures: 'Measures',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      dimensions: 'Dimensions',
      orders: 'Orders',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      measures: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      dimensions: 'string',
      orders: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotDsDetailsResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotDsDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBotDsDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBotDsDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotHotDsDatasRequest extends $tea.Model {
  cubeId?: string;
  measures?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  orders?: string;
  dimensions?: string;
  filters?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      measures: 'Measures',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      orders: 'Orders',
      dimensions: 'Dimensions',
      filters: 'Filters',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      measures: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      orders: 'string',
      dimensions: 'string',
      filters: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotHotDsDatasResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotHotDsDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBotHotDsDatasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBotHotDsDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotHotKnowledgesRequest extends $tea.Model {
  cubeId?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  dimensions?: string;
  orders?: string;
  measures?: string;
  filters?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      dimensions: 'Dimensions',
      orders: 'Orders',
      measures: 'Measures',
      filters: 'Filters',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      dimensions: 'string',
      orders: 'string',
      measures: 'string',
      filters: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotHotKnowledgesResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotHotKnowledgesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBotHotKnowledgesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBotHotKnowledgesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotKnowledgeDetailsRequest extends $tea.Model {
  cubeId?: string;
  measures?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  limit?: string;
  dimensions?: string;
  orders?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      measures: 'Measures',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      limit: 'Limit',
      dimensions: 'Dimensions',
      orders: 'Orders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      measures: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      limit: 'string',
      dimensions: 'string',
      orders: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotKnowledgeDetailsResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotKnowledgeDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBotKnowledgeDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBotKnowledgeDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotReceptionDetailDatasRequest extends $tea.Model {
  cubeId?: string;
  measures?: string;
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  dimensions?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      measures: 'Measures',
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      dimensions: 'Dimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      measures: 'string',
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      dimensions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotReceptionDetailDatasResponseBody extends $tea.Model {
  costTime?: string;
  requestId?: string;
  datas?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      datas: 'Datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      requestId: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotReceptionDetailDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBotReceptionDetailDatasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBotReceptionDetailDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationLogsRequest extends $tea.Model {
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationLogsResponseBody extends $tea.Model {
  requestId?: string;
  chatLogs?: { [key: string]: any }[];
  rounds?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      chatLogs: 'ChatLogs',
      rounds: 'Rounds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      chatLogs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      rounds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConversationLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConversationLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConversationLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveKnowledgeCategoryRequest extends $tea.Model {
  knowledgeId?: number;
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveKnowledgeCategoryResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveKnowledgeCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MoveKnowledgeCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveKnowledgeCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDialogFlowRequest extends $tea.Model {
  dialogId?: number;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDialogFlowResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDialogFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishDialogFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishDialogFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishKnowledgeRequest extends $tea.Model {
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishKnowledgeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishKnowledgeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishKnowledgeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishKnowledgeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBotsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBotsResponseBody extends $tea.Model {
  totalCount?: number;
  bots?: QueryBotsResponseBodyBots[];
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      bots: 'Bots',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      bots: { 'type': 'array', 'itemType': QueryBotsResponseBodyBots },
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBotsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDialogsRequest extends $tea.Model {
  instanceId?: string;
  dialogName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      dialogName: 'DialogName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      dialogName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDialogsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  dialogs?: QueryDialogsResponseBodyDialogs[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      dialogs: 'Dialogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      dialogs: { 'type': 'array', 'itemType': QueryDialogsResponseBodyDialogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDialogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDialogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDialogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPerspectivesResponseBody extends $tea.Model {
  requestId?: string;
  perspectives?: QueryPerspectivesResponseBodyPerspectives[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      perspectives: 'Perspectives',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      perspectives: { 'type': 'array', 'itemType': QueryPerspectivesResponseBodyPerspectives },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPerspectivesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPerspectivesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPerspectivesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySystemEntitiesRequest extends $tea.Model {
  entityName?: string;
  static names(): { [key: string]: string } {
    return {
      entityName: 'EntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySystemEntitiesResponseBody extends $tea.Model {
  systemEntities?: QuerySystemEntitiesResponseBodySystemEntities[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      systemEntities: 'SystemEntities',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEntities: { 'type': 'array', 'itemType': QuerySystemEntitiesResponseBodySystemEntities },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySystemEntitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySystemEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySystemEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntityMemberRequest extends $tea.Model {
  entityId?: number;
  removeType?: string;
  member?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      removeType: 'RemoveType',
      member: 'Member',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      removeType: 'string',
      member: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntityMemberResponseBody extends $tea.Model {
  entityId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntityMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveEntityMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveEntityMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSynonymRequest extends $tea.Model {
  coreWordName?: string;
  synonym?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordName: 'CoreWordName',
      synonym: 'Synonym',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordName: 'string',
      synonym: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSynonymResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSynonymResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveSynonymResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveSynonymResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDialogFlowRequest extends $tea.Model {
  dialogId?: number;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDialogFlowResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDialogFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TestDialogFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TestDialogFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategoryRequest extends $tea.Model {
  name?: string;
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategoryResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCoreWordRequest extends $tea.Model {
  coreWordName?: string;
  coreWordCode?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordName: 'CoreWordName',
      coreWordCode: 'CoreWordCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordName: 'string',
      coreWordCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCoreWordResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCoreWordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCoreWordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCoreWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDialogRequest extends $tea.Model {
  dialogId?: number;
  dialogName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      dialogName: 'DialogName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      dialogName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDialogResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDialogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDialogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDialogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDialogFlowRequest extends $tea.Model {
  dialogId?: number;
  moduleDefinition?: string;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      moduleDefinition: 'ModuleDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      moduleDefinition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDialogFlowResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDialogFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDialogFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDialogFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityRequest extends $tea.Model {
  entityId?: number;
  entityName?: string;
  entityType?: string;
  regex?: string;
  members?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      regex: 'Regex',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      regex: 'string',
      members: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityResponseBody extends $tea.Model {
  entityId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentRequest extends $tea.Model {
  intentDefinition?: string;
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      intentDefinition: 'IntentDefinition',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentDefinition: 'string',
      intentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentResponseBody extends $tea.Model {
  requestId?: string;
  intentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      intentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeRequest extends $tea.Model {
  knowledge?: string;
  static names(): { [key: string]: string } {
    return {
      knowledge: 'Knowledge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeResponseBody extends $tea.Model {
  requestId?: string;
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateKnowledgeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateKnowledgeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePerspectiveRequest extends $tea.Model {
  perspectiveId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      perspectiveId: 'PerspectiveId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perspectiveId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePerspectiveResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePerspectiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePerspectiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePerspectiveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResponseBodyAssociate extends $tea.Model {
  title?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesKnowledgeRelatedKnowledges extends $tea.Model {
  knowledgeId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesKnowledge extends $tea.Model {
  hitStatement?: string;
  summary?: string;
  relatedKnowledges?: ChatResponseBodyMessagesKnowledgeRelatedKnowledges[];
  category?: string;
  title?: string;
  content?: string;
  answerSource?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      hitStatement: 'HitStatement',
      summary: 'Summary',
      relatedKnowledges: 'RelatedKnowledges',
      category: 'Category',
      title: 'Title',
      content: 'Content',
      answerSource: 'AnswerSource',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitStatement: 'string',
      summary: 'string',
      relatedKnowledges: { 'type': 'array', 'itemType': ChatResponseBodyMessagesKnowledgeRelatedKnowledges },
      category: 'string',
      title: 'string',
      content: 'string',
      answerSource: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesTextSlots extends $tea.Model {
  value?: string;
  origin?: string;
  name?: string;
  isHit?: boolean;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      origin: 'Origin',
      name: 'Name',
      isHit: 'IsHit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      origin: 'string',
      name: 'string',
      isHit: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesText extends $tea.Model {
  hitStatement?: string;
  dialogName?: string;
  articleTitle?: string;
  answerSource?: string;
  slots?: ChatResponseBodyMessagesTextSlots[];
  intentName?: string;
  metaData?: string;
  nodeName?: string;
  externalFlags?: { [key: string]: any };
  ext?: { [key: string]: any };
  userDefinedChatTitle?: string;
  content?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      hitStatement: 'HitStatement',
      dialogName: 'DialogName',
      articleTitle: 'ArticleTitle',
      answerSource: 'AnswerSource',
      slots: 'Slots',
      intentName: 'IntentName',
      metaData: 'MetaData',
      nodeName: 'NodeName',
      externalFlags: 'ExternalFlags',
      ext: 'Ext',
      userDefinedChatTitle: 'UserDefinedChatTitle',
      content: 'Content',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitStatement: 'string',
      dialogName: 'string',
      articleTitle: 'string',
      answerSource: 'string',
      slots: { 'type': 'array', 'itemType': ChatResponseBodyMessagesTextSlots },
      intentName: 'string',
      metaData: 'string',
      nodeName: 'string',
      externalFlags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userDefinedChatTitle: 'string',
      content: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesRecommends extends $tea.Model {
  summary?: string;
  knowledgeId?: string;
  category?: string;
  title?: string;
  answerSource?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      knowledgeId: 'KnowledgeId',
      category: 'Category',
      title: 'Title',
      answerSource: 'AnswerSource',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      knowledgeId: 'string',
      category: 'string',
      title: 'string',
      answerSource: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessages extends $tea.Model {
  type?: string;
  knowledge?: ChatResponseBodyMessagesKnowledge;
  text?: ChatResponseBodyMessagesText;
  recommends?: ChatResponseBodyMessagesRecommends[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      knowledge: 'Knowledge',
      text: 'Text',
      recommends: 'Recommends',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      knowledge: ChatResponseBodyMessagesKnowledge,
      text: ChatResponseBodyMessagesText,
      recommends: { 'type': 'array', 'itemType': ChatResponseBodyMessagesRecommends },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBotResponseBodyCategories extends $tea.Model {
  categoryId?: number;
  name?: string;
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      name: 'string',
      parentCategoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBotsResponseBodyBots extends $tea.Model {
  introduction?: string;
  avatar?: string;
  timeZone?: string;
  createTime?: string;
  languageCode?: string;
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      introduction: 'Introduction',
      avatar: 'Avatar',
      timeZone: 'TimeZone',
      createTime: 'CreateTime',
      languageCode: 'LanguageCode',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      introduction: 'string',
      avatar: 'string',
      timeZone: 'string',
      createTime: 'string',
      languageCode: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDialogsResponseBodyDialogs extends $tea.Model {
  status?: number;
  dialogName?: string;
  modifyUserId?: string;
  isOnline?: boolean;
  createUserName?: string;
  createTime?: string;
  createUserId?: string;
  modifyUserName?: string;
  description?: string;
  dialogId?: number;
  isSampleDialog?: boolean;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dialogName: 'DialogName',
      modifyUserId: 'ModifyUserId',
      isOnline: 'IsOnline',
      createUserName: 'CreateUserName',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      modifyUserName: 'ModifyUserName',
      description: 'Description',
      dialogId: 'DialogId',
      isSampleDialog: 'IsSampleDialog',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      dialogName: 'string',
      modifyUserId: 'string',
      isOnline: 'boolean',
      createUserName: 'string',
      createTime: 'string',
      createUserId: 'string',
      modifyUserName: 'string',
      description: 'string',
      dialogId: 'number',
      isSampleDialog: 'boolean',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPerspectivesResponseBodyPerspectives extends $tea.Model {
  status?: number;
  modifyUserName?: string;
  createUserName?: string;
  createTime?: string;
  perspectiveId?: string;
  selfDefine?: string;
  name?: string;
  perspectiveCode?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyUserName: 'ModifyUserName',
      createUserName: 'CreateUserName',
      createTime: 'CreateTime',
      perspectiveId: 'PerspectiveId',
      selfDefine: 'SelfDefine',
      name: 'Name',
      perspectiveCode: 'PerspectiveCode',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      modifyUserName: 'string',
      createUserName: 'string',
      createTime: 'string',
      perspectiveId: 'string',
      selfDefine: 'string',
      name: 'string',
      perspectiveCode: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySystemEntitiesResponseBodySystemEntities extends $tea.Model {
  defaultQuestion?: string;
  entityCode?: string;
  entityName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultQuestion: 'DefaultQuestion',
      entityCode: 'EntityCode',
      entityName: 'EntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultQuestion: 'string',
      entityCode: 'string',
      entityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("chatbot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async activatePerspectiveWithOptions(request: ActivatePerspectiveRequest, runtime: $Util.RuntimeOptions): Promise<ActivatePerspectiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ActivatePerspectiveResponse>(await this.doRPCRequest("ActivatePerspective", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ActivatePerspectiveResponse({}));
  }

  async activatePerspective(request: ActivatePerspectiveRequest): Promise<ActivatePerspectiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activatePerspectiveWithOptions(request, runtime);
  }

  async addSynonymWithOptions(request: AddSynonymRequest, runtime: $Util.RuntimeOptions): Promise<AddSynonymResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSynonymResponse>(await this.doRPCRequest("AddSynonym", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new AddSynonymResponse({}));
  }

  async addSynonym(request: AddSynonymRequest): Promise<AddSynonymResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSynonymWithOptions(request, runtime);
  }

  async appendEntityMemberWithOptions(request: AppendEntityMemberRequest, runtime: $Util.RuntimeOptions): Promise<AppendEntityMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AppendEntityMemberResponse>(await this.doRPCRequest("AppendEntityMember", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new AppendEntityMemberResponse({}));
  }

  async appendEntityMember(request: AppendEntityMemberRequest): Promise<AppendEntityMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appendEntityMemberWithOptions(request, runtime);
  }

  async associateWithOptions(request: AssociateRequest, runtime: $Util.RuntimeOptions): Promise<AssociateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateResponse>(await this.doRPCRequest("Associate", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateResponse({}));
  }

  async associate(request: AssociateRequest): Promise<AssociateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateWithOptions(request, runtime);
  }

  async chatWithOptions(request: ChatRequest, runtime: $Util.RuntimeOptions): Promise<ChatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChatResponse>(await this.doRPCRequest("Chat", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ChatResponse({}));
  }

  async chat(request: ChatRequest): Promise<ChatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chatWithOptions(request, runtime);
  }

  async createBotWithOptions(request: CreateBotRequest, runtime: $Util.RuntimeOptions): Promise<CreateBotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBotResponse>(await this.doRPCRequest("CreateBot", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBotResponse({}));
  }

  async createBot(request: CreateBotRequest): Promise<CreateBotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBotWithOptions(request, runtime);
  }

  async createCategoryWithOptions(request: CreateCategoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCategoryResponse>(await this.doRPCRequest("CreateCategory", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCategoryResponse({}));
  }

  async createCategory(request: CreateCategoryRequest): Promise<CreateCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCategoryWithOptions(request, runtime);
  }

  async createCoreWordWithOptions(request: CreateCoreWordRequest, runtime: $Util.RuntimeOptions): Promise<CreateCoreWordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCoreWordResponse>(await this.doRPCRequest("CreateCoreWord", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCoreWordResponse({}));
  }

  async createCoreWord(request: CreateCoreWordRequest): Promise<CreateCoreWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCoreWordWithOptions(request, runtime);
  }

  async createDialogWithOptions(request: CreateDialogRequest, runtime: $Util.RuntimeOptions): Promise<CreateDialogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDialogResponse>(await this.doRPCRequest("CreateDialog", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDialogResponse({}));
  }

  async createDialog(request: CreateDialogRequest): Promise<CreateDialogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDialogWithOptions(request, runtime);
  }

  async createEntityWithOptions(request: CreateEntityRequest, runtime: $Util.RuntimeOptions): Promise<CreateEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEntityResponse>(await this.doRPCRequest("CreateEntity", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEntityResponse({}));
  }

  async createEntity(request: CreateEntityRequest): Promise<CreateEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEntityWithOptions(request, runtime);
  }

  async createIntentWithOptions(request: CreateIntentRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIntentResponse>(await this.doRPCRequest("CreateIntent", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIntentResponse({}));
  }

  async createIntent(request: CreateIntentRequest): Promise<CreateIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntentWithOptions(request, runtime);
  }

  async createKnowledgeWithOptions(request: CreateKnowledgeRequest, runtime: $Util.RuntimeOptions): Promise<CreateKnowledgeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateKnowledgeResponse>(await this.doRPCRequest("CreateKnowledge", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateKnowledgeResponse({}));
  }

  async createKnowledge(request: CreateKnowledgeRequest): Promise<CreateKnowledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKnowledgeWithOptions(request, runtime);
  }

  async deleteBotWithOptions(request: DeleteBotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBotResponse>(await this.doRPCRequest("DeleteBot", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBotResponse({}));
  }

  async deleteBot(request: DeleteBotRequest): Promise<DeleteBotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBotWithOptions(request, runtime);
  }

  async deleteCategoryWithOptions(request: DeleteCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCategoryResponse>(await this.doRPCRequest("DeleteCategory", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCategoryResponse({}));
  }

  async deleteCategory(request: DeleteCategoryRequest): Promise<DeleteCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCategoryWithOptions(request, runtime);
  }

  async deleteCoreWordWithOptions(request: DeleteCoreWordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCoreWordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCoreWordResponse>(await this.doRPCRequest("DeleteCoreWord", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCoreWordResponse({}));
  }

  async deleteCoreWord(request: DeleteCoreWordRequest): Promise<DeleteCoreWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCoreWordWithOptions(request, runtime);
  }

  async deleteDialogWithOptions(request: DeleteDialogRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDialogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDialogResponse>(await this.doRPCRequest("DeleteDialog", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDialogResponse({}));
  }

  async deleteDialog(request: DeleteDialogRequest): Promise<DeleteDialogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDialogWithOptions(request, runtime);
  }

  async deleteEntityWithOptions(request: DeleteEntityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEntityResponse>(await this.doRPCRequest("DeleteEntity", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEntityResponse({}));
  }

  async deleteEntity(request: DeleteEntityRequest): Promise<DeleteEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEntityWithOptions(request, runtime);
  }

  async deleteIntentWithOptions(request: DeleteIntentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIntentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIntentResponse>(await this.doRPCRequest("DeleteIntent", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIntentResponse({}));
  }

  async deleteIntent(request: DeleteIntentRequest): Promise<DeleteIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIntentWithOptions(request, runtime);
  }

  async deleteKnowledgeWithOptions(request: DeleteKnowledgeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKnowledgeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteKnowledgeResponse>(await this.doRPCRequest("DeleteKnowledge", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteKnowledgeResponse({}));
  }

  async deleteKnowledge(request: DeleteKnowledgeRequest): Promise<DeleteKnowledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKnowledgeWithOptions(request, runtime);
  }

  async describeBotWithOptions(request: DescribeBotRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBotResponse>(await this.doRPCRequest("DescribeBot", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBotResponse({}));
  }

  async describeBot(request: DescribeBotRequest): Promise<DescribeBotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBotWithOptions(request, runtime);
  }

  async describeCategoryWithOptions(request: DescribeCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCategoryResponse>(await this.doRPCRequest("DescribeCategory", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCategoryResponse({}));
  }

  async describeCategory(request: DescribeCategoryRequest): Promise<DescribeCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCategoryWithOptions(request, runtime);
  }

  async describeCoreWordWithOptions(request: DescribeCoreWordRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCoreWordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCoreWordResponse>(await this.doRPCRequest("DescribeCoreWord", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCoreWordResponse({}));
  }

  async describeCoreWord(request: DescribeCoreWordRequest): Promise<DescribeCoreWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCoreWordWithOptions(request, runtime);
  }

  async describeDialogWithOptions(request: DescribeDialogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDialogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDialogResponse>(await this.doRPCRequest("DescribeDialog", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDialogResponse({}));
  }

  async describeDialog(request: DescribeDialogRequest): Promise<DescribeDialogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDialogWithOptions(request, runtime);
  }

  async describePerspectiveWithOptions(request: DescribePerspectiveRequest, runtime: $Util.RuntimeOptions): Promise<DescribePerspectiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePerspectiveResponse>(await this.doRPCRequest("DescribePerspective", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePerspectiveResponse({}));
  }

  async describePerspective(request: DescribePerspectiveRequest): Promise<DescribePerspectiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePerspectiveWithOptions(request, runtime);
  }

  async disableDialogFlowWithOptions(request: DisableDialogFlowRequest, runtime: $Util.RuntimeOptions): Promise<DisableDialogFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableDialogFlowResponse>(await this.doRPCRequest("DisableDialogFlow", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DisableDialogFlowResponse({}));
  }

  async disableDialogFlow(request: DisableDialogFlowRequest): Promise<DisableDialogFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDialogFlowWithOptions(request, runtime);
  }

  async disableKnowledgeWithOptions(request: DisableKnowledgeRequest, runtime: $Util.RuntimeOptions): Promise<DisableKnowledgeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableKnowledgeResponse>(await this.doRPCRequest("DisableKnowledge", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DisableKnowledgeResponse({}));
  }

  async disableKnowledge(request: DisableKnowledgeRequest): Promise<DisableKnowledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableKnowledgeWithOptions(request, runtime);
  }

  async feedbackWithOptions(request: FeedbackRequest, runtime: $Util.RuntimeOptions): Promise<FeedbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FeedbackResponse>(await this.doRPCRequest("Feedback", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new FeedbackResponse({}));
  }

  async feedback(request: FeedbackRequest): Promise<FeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.feedbackWithOptions(request, runtime);
  }

  async getBotChatDataWithOptions(request: GetBotChatDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBotChatDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBotChatDataResponse>(await this.doRPCRequest("GetBotChatData", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetBotChatDataResponse({}));
  }

  async getBotChatData(request: GetBotChatDataRequest): Promise<GetBotChatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBotChatDataWithOptions(request, runtime);
  }

  async getBotDsStatDataWithOptions(request: GetBotDsStatDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBotDsStatDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBotDsStatDataResponse>(await this.doRPCRequest("GetBotDsStatData", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetBotDsStatDataResponse({}));
  }

  async getBotDsStatData(request: GetBotDsStatDataRequest): Promise<GetBotDsStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBotDsStatDataWithOptions(request, runtime);
  }

  async getBotKnowledgeStatDataWithOptions(request: GetBotKnowledgeStatDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBotKnowledgeStatDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBotKnowledgeStatDataResponse>(await this.doRPCRequest("GetBotKnowledgeStatData", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetBotKnowledgeStatDataResponse({}));
  }

  async getBotKnowledgeStatData(request: GetBotKnowledgeStatDataRequest): Promise<GetBotKnowledgeStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBotKnowledgeStatDataWithOptions(request, runtime);
  }

  async getBotSessionDataWithOptions(request: GetBotSessionDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBotSessionDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBotSessionDataResponse>(await this.doRPCRequest("GetBotSessionData", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetBotSessionDataResponse({}));
  }

  async getBotSessionData(request: GetBotSessionDataRequest): Promise<GetBotSessionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBotSessionDataWithOptions(request, runtime);
  }

  async getConversationListWithOptions(request: GetConversationListRequest, runtime: $Util.RuntimeOptions): Promise<GetConversationListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConversationListResponse>(await this.doRPCRequest("GetConversationList", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetConversationListResponse({}));
  }

  async getConversationList(request: GetConversationListRequest): Promise<GetConversationListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConversationListWithOptions(request, runtime);
  }

  async listBotChatHistorysWithOptions(request: ListBotChatHistorysRequest, runtime: $Util.RuntimeOptions): Promise<ListBotChatHistorysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBotChatHistorysResponse>(await this.doRPCRequest("ListBotChatHistorys", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListBotChatHistorysResponse({}));
  }

  async listBotChatHistorys(request: ListBotChatHistorysRequest): Promise<ListBotChatHistorysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBotChatHistorysWithOptions(request, runtime);
  }

  async listBotColdDsDatasWithOptions(request: ListBotColdDsDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListBotColdDsDatasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBotColdDsDatasResponse>(await this.doRPCRequest("ListBotColdDsDatas", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListBotColdDsDatasResponse({}));
  }

  async listBotColdDsDatas(request: ListBotColdDsDatasRequest): Promise<ListBotColdDsDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBotColdDsDatasWithOptions(request, runtime);
  }

  async listBotColdKnowledgesWithOptions(request: ListBotColdKnowledgesRequest, runtime: $Util.RuntimeOptions): Promise<ListBotColdKnowledgesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBotColdKnowledgesResponse>(await this.doRPCRequest("ListBotColdKnowledges", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListBotColdKnowledgesResponse({}));
  }

  async listBotColdKnowledges(request: ListBotColdKnowledgesRequest): Promise<ListBotColdKnowledgesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBotColdKnowledgesWithOptions(request, runtime);
  }

  async listBotDsDetailsWithOptions(request: ListBotDsDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListBotDsDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBotDsDetailsResponse>(await this.doRPCRequest("ListBotDsDetails", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListBotDsDetailsResponse({}));
  }

  async listBotDsDetails(request: ListBotDsDetailsRequest): Promise<ListBotDsDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBotDsDetailsWithOptions(request, runtime);
  }

  async listBotHotDsDatasWithOptions(request: ListBotHotDsDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListBotHotDsDatasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBotHotDsDatasResponse>(await this.doRPCRequest("ListBotHotDsDatas", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListBotHotDsDatasResponse({}));
  }

  async listBotHotDsDatas(request: ListBotHotDsDatasRequest): Promise<ListBotHotDsDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBotHotDsDatasWithOptions(request, runtime);
  }

  async listBotHotKnowledgesWithOptions(request: ListBotHotKnowledgesRequest, runtime: $Util.RuntimeOptions): Promise<ListBotHotKnowledgesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBotHotKnowledgesResponse>(await this.doRPCRequest("ListBotHotKnowledges", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListBotHotKnowledgesResponse({}));
  }

  async listBotHotKnowledges(request: ListBotHotKnowledgesRequest): Promise<ListBotHotKnowledgesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBotHotKnowledgesWithOptions(request, runtime);
  }

  async listBotKnowledgeDetailsWithOptions(request: ListBotKnowledgeDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListBotKnowledgeDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBotKnowledgeDetailsResponse>(await this.doRPCRequest("ListBotKnowledgeDetails", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListBotKnowledgeDetailsResponse({}));
  }

  async listBotKnowledgeDetails(request: ListBotKnowledgeDetailsRequest): Promise<ListBotKnowledgeDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBotKnowledgeDetailsWithOptions(request, runtime);
  }

  async listBotReceptionDetailDatasWithOptions(request: ListBotReceptionDetailDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListBotReceptionDetailDatasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBotReceptionDetailDatasResponse>(await this.doRPCRequest("ListBotReceptionDetailDatas", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListBotReceptionDetailDatasResponse({}));
  }

  async listBotReceptionDetailDatas(request: ListBotReceptionDetailDatasRequest): Promise<ListBotReceptionDetailDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBotReceptionDetailDatasWithOptions(request, runtime);
  }

  async listConversationLogsWithOptions(request: ListConversationLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListConversationLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConversationLogsResponse>(await this.doRPCRequest("ListConversationLogs", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListConversationLogsResponse({}));
  }

  async listConversationLogs(request: ListConversationLogsRequest): Promise<ListConversationLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConversationLogsWithOptions(request, runtime);
  }

  async moveKnowledgeCategoryWithOptions(request: MoveKnowledgeCategoryRequest, runtime: $Util.RuntimeOptions): Promise<MoveKnowledgeCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveKnowledgeCategoryResponse>(await this.doRPCRequest("MoveKnowledgeCategory", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new MoveKnowledgeCategoryResponse({}));
  }

  async moveKnowledgeCategory(request: MoveKnowledgeCategoryRequest): Promise<MoveKnowledgeCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveKnowledgeCategoryWithOptions(request, runtime);
  }

  async publishDialogFlowWithOptions(request: PublishDialogFlowRequest, runtime: $Util.RuntimeOptions): Promise<PublishDialogFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishDialogFlowResponse>(await this.doRPCRequest("PublishDialogFlow", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new PublishDialogFlowResponse({}));
  }

  async publishDialogFlow(request: PublishDialogFlowRequest): Promise<PublishDialogFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishDialogFlowWithOptions(request, runtime);
  }

  async publishKnowledgeWithOptions(request: PublishKnowledgeRequest, runtime: $Util.RuntimeOptions): Promise<PublishKnowledgeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishKnowledgeResponse>(await this.doRPCRequest("PublishKnowledge", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new PublishKnowledgeResponse({}));
  }

  async publishKnowledge(request: PublishKnowledgeRequest): Promise<PublishKnowledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishKnowledgeWithOptions(request, runtime);
  }

  async queryBotsWithOptions(request: QueryBotsRequest, runtime: $Util.RuntimeOptions): Promise<QueryBotsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryBotsResponse>(await this.doRPCRequest("QueryBots", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryBotsResponse({}));
  }

  async queryBots(request: QueryBotsRequest): Promise<QueryBotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBotsWithOptions(request, runtime);
  }

  async queryDialogsWithOptions(request: QueryDialogsRequest, runtime: $Util.RuntimeOptions): Promise<QueryDialogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDialogsResponse>(await this.doRPCRequest("QueryDialogs", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDialogsResponse({}));
  }

  async queryDialogs(request: QueryDialogsRequest): Promise<QueryDialogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDialogsWithOptions(request, runtime);
  }

  async queryPerspectivesWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryPerspectivesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<QueryPerspectivesResponse>(await this.doRPCRequest("QueryPerspectives", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPerspectivesResponse({}));
  }

  async queryPerspectives(): Promise<QueryPerspectivesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPerspectivesWithOptions(runtime);
  }

  async querySystemEntitiesWithOptions(request: QuerySystemEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<QuerySystemEntitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySystemEntitiesResponse>(await this.doRPCRequest("QuerySystemEntities", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySystemEntitiesResponse({}));
  }

  async querySystemEntities(request: QuerySystemEntitiesRequest): Promise<QuerySystemEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySystemEntitiesWithOptions(request, runtime);
  }

  async removeEntityMemberWithOptions(request: RemoveEntityMemberRequest, runtime: $Util.RuntimeOptions): Promise<RemoveEntityMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveEntityMemberResponse>(await this.doRPCRequest("RemoveEntityMember", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveEntityMemberResponse({}));
  }

  async removeEntityMember(request: RemoveEntityMemberRequest): Promise<RemoveEntityMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeEntityMemberWithOptions(request, runtime);
  }

  async removeSynonymWithOptions(request: RemoveSynonymRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSynonymResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveSynonymResponse>(await this.doRPCRequest("RemoveSynonym", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveSynonymResponse({}));
  }

  async removeSynonym(request: RemoveSynonymRequest): Promise<RemoveSynonymResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSynonymWithOptions(request, runtime);
  }

  async testDialogFlowWithOptions(request: TestDialogFlowRequest, runtime: $Util.RuntimeOptions): Promise<TestDialogFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TestDialogFlowResponse>(await this.doRPCRequest("TestDialogFlow", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new TestDialogFlowResponse({}));
  }

  async testDialogFlow(request: TestDialogFlowRequest): Promise<TestDialogFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testDialogFlowWithOptions(request, runtime);
  }

  async updateCategoryWithOptions(request: UpdateCategoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCategoryResponse>(await this.doRPCRequest("UpdateCategory", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCategoryResponse({}));
  }

  async updateCategory(request: UpdateCategoryRequest): Promise<UpdateCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCategoryWithOptions(request, runtime);
  }

  async updateCoreWordWithOptions(request: UpdateCoreWordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCoreWordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCoreWordResponse>(await this.doRPCRequest("UpdateCoreWord", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCoreWordResponse({}));
  }

  async updateCoreWord(request: UpdateCoreWordRequest): Promise<UpdateCoreWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCoreWordWithOptions(request, runtime);
  }

  async updateDialogWithOptions(request: UpdateDialogRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDialogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDialogResponse>(await this.doRPCRequest("UpdateDialog", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDialogResponse({}));
  }

  async updateDialog(request: UpdateDialogRequest): Promise<UpdateDialogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDialogWithOptions(request, runtime);
  }

  async updateDialogFlowWithOptions(request: UpdateDialogFlowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDialogFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDialogFlowResponse>(await this.doRPCRequest("UpdateDialogFlow", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDialogFlowResponse({}));
  }

  async updateDialogFlow(request: UpdateDialogFlowRequest): Promise<UpdateDialogFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDialogFlowWithOptions(request, runtime);
  }

  async updateEntityWithOptions(request: UpdateEntityRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEntityResponse>(await this.doRPCRequest("UpdateEntity", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEntityResponse({}));
  }

  async updateEntity(request: UpdateEntityRequest): Promise<UpdateEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEntityWithOptions(request, runtime);
  }

  async updateIntentWithOptions(request: UpdateIntentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIntentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIntentResponse>(await this.doRPCRequest("UpdateIntent", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIntentResponse({}));
  }

  async updateIntent(request: UpdateIntentRequest): Promise<UpdateIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIntentWithOptions(request, runtime);
  }

  async updateKnowledgeWithOptions(request: UpdateKnowledgeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateKnowledgeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateKnowledgeResponse>(await this.doRPCRequest("UpdateKnowledge", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateKnowledgeResponse({}));
  }

  async updateKnowledge(request: UpdateKnowledgeRequest): Promise<UpdateKnowledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateKnowledgeWithOptions(request, runtime);
  }

  async updatePerspectiveWithOptions(request: UpdatePerspectiveRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePerspectiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdatePerspectiveResponse>(await this.doRPCRequest("UpdatePerspective", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdatePerspectiveResponse({}));
  }

  async updatePerspective(request: UpdatePerspectiveRequest): Promise<UpdatePerspectiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePerspectiveWithOptions(request, runtime);
  }

}
