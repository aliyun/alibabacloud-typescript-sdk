// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Children extends $tea.Model {
  areaCode?: string;
  categoryId?: number;
  childrens?: Children[];
  name?: string;
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      areaCode: 'AreaCode',
      categoryId: 'CategoryId',
      childrens: 'Childrens',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaCode: 'string',
      categoryId: 'number',
      childrens: { 'type': 'array', 'itemType': Children },
      name: 'string',
      parentCategoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntentCreateDTO extends $tea.Model {
  intentId?: number;
  name?: string;
  ruleCheck?: RuleMtopDTO[];
  slot?: SlotrecordMtopDTO[];
  userSay?: UsersayMtopDTO[];
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      name: 'Name',
      ruleCheck: 'RuleCheck',
      slot: 'Slot',
      userSay: 'UserSay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      name: 'string',
      ruleCheck: { 'type': 'array', 'itemType': RuleMtopDTO },
      slot: { 'type': 'array', 'itemType': SlotrecordMtopDTO },
      userSay: { 'type': 'array', 'itemType': UsersayMtopDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasButtonDTO extends $tea.Model {
  name?: string;
  text?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      text: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasButtonListDTO extends $tea.Model {
  button?: PaasButtonDTO[];
  intro?: string;
  static names(): { [key: string]: string } {
    return {
      button: 'Button',
      intro: 'Intro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      button: { 'type': 'array', 'itemType': PaasButtonDTO },
      intro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasConditionEntryDTO extends $tea.Model {
  id?: string;
  name?: string;
  term?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      term: 'Term',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      term: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasConditionSetDTO extends $tea.Model {
  conditionEntries?: PaasConditionEntryDTO[];
  static names(): { [key: string]: string } {
    return {
      conditionEntries: 'ConditionEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionEntries: { 'type': 'array', 'itemType': PaasConditionEntryDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasEdgeDTO extends $tea.Model {
  id?: string;
  label?: string;
  source?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
      source: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasEntryDTO extends $tea.Model {
  pluginFieldDataEntry?: PaasEntryPluginFieldDataDTO;
  static names(): { [key: string]: string } {
    return {
      pluginFieldDataEntry: 'PluginFieldDataEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginFieldDataEntry: PaasEntryPluginFieldDataDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasEntryPluginFieldDataDTO extends $tea.Model {
  contentEntry?: PaasConditionSetDTO[];
  lifeSpan?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contentEntry: 'ContentEntry',
      lifeSpan: 'LifeSpan',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentEntry: { 'type': 'array', 'itemType': PaasConditionSetDTO },
      lifeSpan: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasFunctionDTO extends $tea.Model {
  pluginFieldDataFunction?: PaasFunctionPluginFieldDataDTO;
  static names(): { [key: string]: string } {
    return {
      pluginFieldDataFunction: 'PluginFieldDataFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginFieldDataFunction: PaasFunctionPluginFieldDataDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasFunctionPluginFieldDataDTO extends $tea.Model {
  aliyunFunction?: string;
  aliyunService?: string;
  code?: string;
  description?: string;
  endPoint?: string;
  function?: string;
  name?: string;
  params?: { [key: string]: any };
  switch?: PaasSwitchCaseDTO[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunFunction: 'AliyunFunction',
      aliyunService: 'AliyunService',
      code: 'Code',
      description: 'Description',
      endPoint: 'EndPoint',
      function: 'Function',
      name: 'Name',
      params: 'Params',
      switch: 'Switch',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunFunction: 'string',
      aliyunService: 'string',
      code: 'string',
      description: 'string',
      endPoint: 'string',
      function: 'string',
      name: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      switch: { 'type': 'array', 'itemType': PaasSwitchCaseDTO },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasFunctionPluginParams extends $tea.Model {
  body?: string;
  header?: { [key: string]: string };
  method?: string;
  query?: { [key: string]: string };
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      header: 'Header',
      method: 'Method',
      query: 'Query',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      header: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      method: 'string',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasNodeDTO extends $tea.Model {
  code?: string;
  id?: string;
  label?: string;
  pluginData?: PaasPluginDataDTO;
  xx?: number;
  yy?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      label: 'Label',
      pluginData: 'PluginData',
      xx: 'Xx',
      yy: 'Yy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      label: 'string',
      pluginData: PaasPluginDataDTO,
      xx: 'number',
      yy: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasPluginDataDTO extends $tea.Model {
  entry?: PaasEntryDTO;
  function?: PaasFunctionDTO;
  response?: PaasResponseDTO;
  slot?: PaasSlotDTO;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
      function: 'Function',
      response: 'Response',
      slot: 'Slot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: PaasEntryDTO,
      function: PaasFunctionDTO,
      response: PaasResponseDTO,
      slot: PaasSlotDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasProcessData extends $tea.Model {
  edges?: PaasEdgeDTO[];
  nodes?: PaasNodeDTO[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': PaasEdgeDTO },
      nodes: { 'type': 'array', 'itemType': PaasNodeDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasResponseDTO extends $tea.Model {
  pluginFieldDataResponse?: PaasResponsePluginFieldDataDTO;
  static names(): { [key: string]: string } {
    return {
      pluginFieldDataResponse: 'PluginFieldDataResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginFieldDataResponse: PaasResponsePluginFieldDataDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasResponseNodeContentDTO extends $tea.Model {
  buttonList?: PaasButtonListDTO;
  image?: string;
  text?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buttonList: 'ButtonList',
      image: 'Image',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttonList: PaasButtonListDTO,
      image: 'string',
      text: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasResponsePluginFieldDataDTO extends $tea.Model {
  contentResponse?: PaasResponseNodeContentDTO;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contentResponse: 'ContentResponse',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentResponse: PaasResponseNodeContentDTO,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasSlotConfigDTO extends $tea.Model {
  isArray?: boolean;
  isNecessary?: boolean;
  lifeSpan?: number;
  name?: string;
  question?: string[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isArray: 'IsArray',
      isNecessary: 'IsNecessary',
      lifeSpan: 'LifeSpan',
      name: 'Name',
      question: 'Question',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isArray: 'boolean',
      isNecessary: 'boolean',
      lifeSpan: 'number',
      name: 'string',
      question: { 'type': 'array', 'itemType': 'string' },
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasSlotDTO extends $tea.Model {
  pluginFieldDataSlot?: PaasSlotPluginFieldDataDTO;
  static names(): { [key: string]: string } {
    return {
      pluginFieldDataSlot: 'PluginFieldDataSlot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginFieldDataSlot: PaasSlotPluginFieldDataDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasSlotPluginFieldDataDTO extends $tea.Model {
  contentSlot?: PaasSlotConfigDTO[];
  intentId?: string;
  intentName?: string;
  isSysIntent?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contentSlot: 'ContentSlot',
      intentId: 'IntentId',
      intentName: 'IntentName',
      isSysIntent: 'IsSysIntent',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentSlot: { 'type': 'array', 'itemType': PaasSlotConfigDTO },
      intentId: 'string',
      intentName: 'string',
      isSysIntent: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasSwitchCaseDTO extends $tea.Model {
  id?: string;
  label?: string;
  type?: string;
  value?: string;
  variableName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      type: 'Type',
      value: 'Value',
      variableName: 'VariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
      type: 'string',
      value: 'string',
      variableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RuleMtopDTO extends $tea.Model {
  error?: string[];
  strict?: boolean;
  text?: string;
  warning?: string[];
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      strict: 'Strict',
      text: 'Text',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: { 'type': 'array', 'itemType': 'string' },
      strict: 'boolean',
      text: 'string',
      warning: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SectionMtopDTO extends $tea.Model {
  slotId?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      slotId: 'SlotId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slotId: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SlotrecordMtopDTO extends $tea.Model {
  id?: string;
  isArray?: boolean;
  isNecessary?: boolean;
  lifeSpan?: number;
  name?: string;
  question?: string[];
  tags?: TagMtopDTO[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isArray: 'IsArray',
      isNecessary: 'IsNecessary',
      lifeSpan: 'LifeSpan',
      name: 'Name',
      question: 'Question',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isArray: 'boolean',
      isNecessary: 'boolean',
      lifeSpan: 'number',
      name: 'string',
      question: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': TagMtopDTO },
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagMtopDTO extends $tea.Model {
  userSayId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      userSayId: 'UserSayId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userSayId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDialogFlowModuleDefinition extends $tea.Model {
  edges?: PaasEdgeDTO[];
  nodes?: PaasNodeDTO[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': PaasEdgeDTO },
      nodes: { 'type': 'array', 'itemType': PaasNodeDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UsersayMtopDTO extends $tea.Model {
  data?: SectionMtopDTO[];
  id?: string;
  strict?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      id: 'Id',
      strict: 'Strict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SectionMtopDTO },
      id: 'string',
      strict: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  applyType?: string;
  entityId?: number;
  member?: AppendEntityMemberRequestMember;
  static names(): { [key: string]: string } {
    return {
      applyType: 'ApplyType',
      entityId: 'EntityId',
      member: 'Member',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyType: 'string',
      entityId: 'number',
      member: AppendEntityMemberRequestMember,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendEntityMemberShrinkRequest extends $tea.Model {
  applyType?: string;
  entityId?: number;
  memberShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applyType: 'ApplyType',
      entityId: 'EntityId',
      memberShrink: 'Member',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyType: 'string',
      entityId: 'number',
      memberShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendEntityMemberResponseBody extends $tea.Model {
  entityId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
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
  perspective?: string[];
  recommendNum?: number;
  sessionId?: string;
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      perspective: 'Perspective',
      recommendNum: 'RecommendNum',
      sessionId: 'SessionId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      perspective: { 'type': 'array', 'itemType': 'string' },
      recommendNum: 'number',
      sessionId: 'string',
      utterance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResponseBody extends $tea.Model {
  associate?: AssociateResponseBodyAssociate[];
  messageId?: string;
  requestId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      associate: 'Associate',
      messageId: 'MessageId',
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associate: { 'type': 'array', 'itemType': AssociateResponseBodyAssociate },
      messageId: 'string',
      requestId: 'string',
      sessionId: 'string',
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
  intentName?: string;
  knowledgeId?: string;
  perspective?: string[];
  recommend?: boolean;
  senderId?: string;
  senderNick?: string;
  sessionId?: string;
  tag?: string;
  utterance?: string;
  vendorParam?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intentName: 'IntentName',
      knowledgeId: 'KnowledgeId',
      perspective: 'Perspective',
      recommend: 'Recommend',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      sessionId: 'SessionId',
      tag: 'Tag',
      utterance: 'Utterance',
      vendorParam: 'VendorParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intentName: 'string',
      knowledgeId: 'string',
      perspective: { 'type': 'array', 'itemType': 'string' },
      recommend: 'boolean',
      senderId: 'string',
      senderNick: 'string',
      sessionId: 'string',
      tag: 'string',
      utterance: 'string',
      vendorParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBody extends $tea.Model {
  messageId?: string;
  messages?: ChatResponseBodyMessages[];
  requestId?: string;
  sessionId?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      messages: 'Messages',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      messages: { 'type': 'array', 'itemType': ChatResponseBodyMessages },
      requestId: 'string',
      sessionId: 'string',
      tag: 'string',
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
  avatar?: string;
  introduction?: string;
  languageCode?: string;
  name?: string;
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      introduction: 'string',
      languageCode: 'string',
      name: 'string',
      robotType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBotResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
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
  bizCode?: string;
  knowledgeType?: number;
  name?: string;
  parentCategoryId?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      knowledgeType: 'KnowledgeType',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      knowledgeType: 'number',
      name: 'string',
      parentCategoryId: 'number',
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
  coreWordCode?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordCode: 'CoreWordCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordCode: 'string',
      requestId: 'string',
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
  description?: string;
  dialogName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dialogName: 'DialogName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dialogName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogResponseBody extends $tea.Model {
  dialogId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      requestId: 'string',
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
  members?: CreateEntityRequestMembers[];
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      members: 'Members',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      entityName: 'string',
      entityType: 'string',
      members: { 'type': 'array', 'itemType': CreateEntityRequestMembers },
      regex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityShrinkRequest extends $tea.Model {
  dialogId?: number;
  entityName?: string;
  entityType?: string;
  membersShrink?: string;
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      membersShrink: 'Members',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      entityName: 'string',
      entityType: 'string',
      membersShrink: 'string',
      regex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityResponseBody extends $tea.Model {
  entityId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
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
  dialogId?: number;
  intentDefinition?: IntentCreateDTO;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      intentDefinition: 'IntentDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      intentDefinition: IntentCreateDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentShrinkRequest extends $tea.Model {
  dialogId?: number;
  intentDefinitionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      intentDefinitionShrink: 'IntentDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      intentDefinitionShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentResponseBody extends $tea.Model {
  intentId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      requestId: 'string',
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
  knowledge?: CreateKnowledgeRequestKnowledge;
  static names(): { [key: string]: string } {
    return {
      knowledge: 'Knowledge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledge: CreateKnowledgeRequestKnowledge,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeShrinkRequest extends $tea.Model {
  knowledgeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeShrink: 'Knowledge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeResponseBody extends $tea.Model {
  knowledgeId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      requestId: 'string',
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

export class CreatePerspectiveRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerspectiveResponseBody extends $tea.Model {
  perspectiveId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      perspectiveId: 'PerspectiveId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perspectiveId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerspectiveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePerspectiveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePerspectiveResponseBody,
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
  entityId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
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
  intentId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      requestId: 'string',
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
  avatar?: string;
  categories?: DescribeBotResponseBodyCategories[];
  createTime?: string;
  instanceId?: string;
  introduction?: string;
  languageCode?: string;
  logo?: string;
  name?: string;
  requestId?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      categories: 'Categories',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      logo: 'Logo',
      name: 'Name',
      requestId: 'RequestId',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      categories: { 'type': 'array', 'itemType': DescribeBotResponseBodyCategories },
      createTime: 'string',
      instanceId: 'string',
      introduction: 'string',
      languageCode: 'string',
      logo: 'string',
      name: 'string',
      requestId: 'string',
      timeZone: 'string',
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
  name?: string;
  parentCategoryId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      name: 'string',
      parentCategoryId: 'number',
      requestId: 'string',
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
  coreWordCode?: string;
  coreWordName?: string;
  createTime?: string;
  modifyTime?: string;
  requestId?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      coreWordCode: 'CoreWordCode',
      coreWordName: 'CoreWordName',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordCode: 'string',
      coreWordName: 'string',
      createTime: 'string',
      modifyTime: 'string',
      requestId: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
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
  createTime?: string;
  createUserId?: string;
  createUserName?: string;
  description?: string;
  dialogId?: number;
  dialogName?: string;
  isOnline?: boolean;
  isSampleDialog?: boolean;
  modifyTime?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  requestId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      description: 'Description',
      dialogId: 'DialogId',
      dialogName: 'DialogName',
      isOnline: 'IsOnline',
      isSampleDialog: 'IsSampleDialog',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      description: 'string',
      dialogId: 'number',
      dialogName: 'string',
      isOnline: 'boolean',
      isSampleDialog: 'boolean',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      requestId: 'string',
      status: 'number',
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

export class DescribeDialogFlowRequest extends $tea.Model {
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

export class DescribeDialogFlowResponseBody extends $tea.Model {
  accountId?: string;
  createTime?: string;
  createUserId?: string;
  createUserName?: string;
  dialogId?: number;
  dialogName?: string;
  globalVars?: { [key: string]: any };
  instanceId?: string;
  modifyTime?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  moduleDefinition?: PaasProcessData;
  moduleId?: number;
  moduleName?: string;
  requestId?: string;
  status?: number;
  tags?: string;
  templates?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      dialogId: 'DialogId',
      dialogName: 'DialogName',
      globalVars: 'GlobalVars',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      moduleDefinition: 'ModuleDefinition',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      requestId: 'RequestId',
      status: 'Status',
      tags: 'Tags',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      dialogId: 'number',
      dialogName: 'string',
      globalVars: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      moduleDefinition: PaasProcessData,
      moduleId: 'number',
      moduleName: 'string',
      requestId: 'string',
      status: 'number',
      tags: 'string',
      templates: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDialogFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDialogFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEntitiesRequest extends $tea.Model {
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

export class DescribeEntitiesResponseBody extends $tea.Model {
  createTime?: string;
  createUserId?: string;
  createUserName?: string;
  entityId?: number;
  entityName?: string;
  entityType?: string;
  members?: DescribeEntitiesResponseBodyMembers[];
  modifyTime?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  regex?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      members: 'Members',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      regex: 'Regex',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      members: { 'type': 'array', 'itemType': DescribeEntitiesResponseBodyMembers },
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      regex: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEntitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentRequest extends $tea.Model {
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

export class DescribeIntentResponseBody extends $tea.Model {
  createTime?: string;
  createUserId?: string;
  createUserName?: string;
  dialogId?: number;
  intentId?: number;
  modifyTime?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  name?: string;
  requestId?: string;
  ruleCheck?: DescribeIntentResponseBodyRuleCheck[];
  slot?: DescribeIntentResponseBodySlot[];
  type?: string;
  userSay?: DescribeIntentResponseBodyUserSay[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      dialogId: 'DialogId',
      intentId: 'IntentId',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      name: 'Name',
      requestId: 'RequestId',
      ruleCheck: 'RuleCheck',
      slot: 'Slot',
      type: 'Type',
      userSay: 'UserSay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      dialogId: 'number',
      intentId: 'number',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      name: 'string',
      requestId: 'string',
      ruleCheck: { 'type': 'array', 'itemType': DescribeIntentResponseBodyRuleCheck },
      slot: { 'type': 'array', 'itemType': DescribeIntentResponseBodySlot },
      type: 'string',
      userSay: { 'type': 'array', 'itemType': DescribeIntentResponseBodyUserSay },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeRequest extends $tea.Model {
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

export class DescribeKnowledgeResponseBody extends $tea.Model {
  categoryId?: number;
  coreWords?: string[];
  createTime?: string;
  createUserName?: string;
  endDate?: string;
  keyWords?: string[];
  knowledgeId?: number;
  knowledgeStatus?: number;
  knowledgeTitle?: string;
  knowledgeType?: number;
  modifyTime?: string;
  modifyUserName?: string;
  outlines?: DescribeKnowledgeResponseBodyOutlines[];
  requestId?: string;
  simQuestions?: DescribeKnowledgeResponseBodySimQuestions[];
  solutions?: DescribeKnowledgeResponseBodySolutions[];
  startDate?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      coreWords: 'CoreWords',
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      endDate: 'EndDate',
      keyWords: 'KeyWords',
      knowledgeId: 'KnowledgeId',
      knowledgeStatus: 'KnowledgeStatus',
      knowledgeTitle: 'KnowledgeTitle',
      knowledgeType: 'KnowledgeType',
      modifyTime: 'ModifyTime',
      modifyUserName: 'ModifyUserName',
      outlines: 'Outlines',
      requestId: 'RequestId',
      simQuestions: 'SimQuestions',
      solutions: 'Solutions',
      startDate: 'StartDate',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      coreWords: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      createUserName: 'string',
      endDate: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      knowledgeId: 'number',
      knowledgeStatus: 'number',
      knowledgeTitle: 'string',
      knowledgeType: 'number',
      modifyTime: 'string',
      modifyUserName: 'string',
      outlines: { 'type': 'array', 'itemType': DescribeKnowledgeResponseBodyOutlines },
      requestId: 'string',
      simQuestions: { 'type': 'array', 'itemType': DescribeKnowledgeResponseBodySimQuestions },
      solutions: { 'type': 'array', 'itemType': DescribeKnowledgeResponseBodySolutions },
      startDate: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeKnowledgeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeKnowledgeResponseBody,
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
  createTime?: string;
  createUserName?: string;
  modifyTime?: string;
  modifyUserName?: string;
  name?: string;
  perspectiveCode?: string;
  perspectiveId?: string;
  requestId?: string;
  selfDefine?: boolean;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      modifyTime: 'ModifyTime',
      modifyUserName: 'ModifyUserName',
      name: 'Name',
      perspectiveCode: 'PerspectiveCode',
      perspectiveId: 'PerspectiveId',
      requestId: 'RequestId',
      selfDefine: 'SelfDefine',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserName: 'string',
      modifyTime: 'string',
      modifyUserName: 'string',
      name: 'string',
      perspectiveCode: 'string',
      perspectiveId: 'string',
      requestId: 'string',
      selfDefine: 'boolean',
      status: 'number',
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
  feedback?: string;
  instanceId?: string;
  messageId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      instanceId: 'string',
      messageId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackResponseBody extends $tea.Model {
  feedback?: string;
  httpStatus?: number;
  messageId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      httpStatus: 'HttpStatus',
      messageId: 'MessageId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      httpStatus: 'number',
      messageId: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetAsyncResultRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncResultResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAsyncResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAsyncResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotChatDataRequest extends $tea.Model {
  endTime?: string;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotChatDataResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endTime?: string;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotDsStatDataResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endTime?: string;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotKnowledgeStatDataResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endTime?: string;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBotSessionDataResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endDate?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  senderId?: string;
  sessionId?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      senderId: 'SenderId',
      sessionId: 'SessionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      senderId: 'string',
      sessionId: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationListResponseBody extends $tea.Model {
  messages?: { [key: string]: any }[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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
  endTime?: string;
  limit?: number;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotChatHistorysResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endTime?: string;
  limit?: number;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotColdDsDatasResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endTime?: string;
  limit?: number;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotColdKnowledgesResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endTime?: string;
  limit?: number;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotDsDetailsResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endTime?: string;
  limit?: number;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotHotDsDatasResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endTime?: string;
  limit?: number;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotHotKnowledgesResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endTime?: string;
  limit?: string;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'string',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotKnowledgeDetailsResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  endTime?: string;
  robotInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      robotInstanceId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBotReceptionDetailDatasResponseBody extends $tea.Model {
  costTime?: string;
  datas?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      datas: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  chatLogs?: { [key: string]: any }[];
  requestId?: string;
  rounds?: number;
  static names(): { [key: string]: string } {
    return {
      chatLogs: 'ChatLogs',
      requestId: 'RequestId',
      rounds: 'Rounds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatLogs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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
  categoryId?: number;
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      knowledgeId: 'number',
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
  async?: boolean;
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
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
  bots?: QueryBotsResponseBodyBots[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bots: 'Bots',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bots: { 'type': 'array', 'itemType': QueryBotsResponseBodyBots },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class QueryCategoriesRequest extends $tea.Model {
  knowledgeType?: number;
  parentCategoryId?: number;
  showChildrens?: boolean;
  static names(): { [key: string]: string } {
    return {
      knowledgeType: 'KnowledgeType',
      parentCategoryId: 'ParentCategoryId',
      showChildrens: 'ShowChildrens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeType: 'number',
      parentCategoryId: 'number',
      showChildrens: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCategoriesResponseBody extends $tea.Model {
  categories?: Children[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': Children },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCategoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCoreWordsRequest extends $tea.Model {
  coreWordName?: string;
  pageNumber?: number;
  pageSize?: number;
  synonym?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordName: 'CoreWordName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      synonym: 'Synonym',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      synonym: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCoreWordsResponseBody extends $tea.Model {
  coreWords?: QueryCoreWordsResponseBodyCoreWords[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      coreWords: 'CoreWords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWords: { 'type': 'array', 'itemType': QueryCoreWordsResponseBodyCoreWords },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCoreWordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCoreWordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCoreWordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDialogsRequest extends $tea.Model {
  dialogName?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dialogName: 'DialogName',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogName: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDialogsResponseBody extends $tea.Model {
  dialogs?: QueryDialogsResponseBodyDialogs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dialogs: 'Dialogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogs: { 'type': 'array', 'itemType': QueryDialogsResponseBodyDialogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class QueryEntitiesRequest extends $tea.Model {
  dialogId?: number;
  entityName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      entityName: 'EntityName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      entityName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntitiesResponseBody extends $tea.Model {
  entities?: QueryEntitiesResponseBodyEntities[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': QueryEntitiesResponseBodyEntities },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsRequest extends $tea.Model {
  dialogId?: number;
  intentName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      intentName: 'IntentName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      intentName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBody extends $tea.Model {
  intents?: QueryIntentsResponseBodyIntents[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      intents: 'Intents',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intents: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntents },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryIntentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryIntentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgesRequest extends $tea.Model {
  categoryId?: number;
  coreWordName?: string;
  knowledgeTitle?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      coreWordName: 'CoreWordName',
      knowledgeTitle: 'KnowledgeTitle',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      coreWordName: 'string',
      knowledgeTitle: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgesResponseBody extends $tea.Model {
  knowledges?: QueryKnowledgesResponseBodyKnowledges[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      knowledges: 'Knowledges',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledges: { 'type': 'array', 'itemType': QueryKnowledgesResponseBodyKnowledges },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryKnowledgesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryKnowledgesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPerspectivesResponseBody extends $tea.Model {
  perspectives?: QueryPerspectivesResponseBodyPerspectives[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      perspectives: 'Perspectives',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perspectives: { 'type': 'array', 'itemType': QueryPerspectivesResponseBodyPerspectives },
      requestId: 'string',
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
  requestId?: string;
  systemEntities?: QuerySystemEntitiesResponseBodySystemEntities[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemEntities: 'SystemEntities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemEntities: { 'type': 'array', 'itemType': QuerySystemEntitiesResponseBodySystemEntities },
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
  member?: RemoveEntityMemberRequestMember;
  removeType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      member: 'Member',
      removeType: 'RemoveType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      member: RemoveEntityMemberRequestMember,
      removeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntityMemberShrinkRequest extends $tea.Model {
  entityId?: number;
  memberShrink?: string;
  removeType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      memberShrink: 'Member',
      removeType: 'RemoveType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      memberShrink: 'string',
      removeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntityMemberResponseBody extends $tea.Model {
  entityId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
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
  categoryId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      name: 'string',
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
  coreWordCode?: string;
  coreWordName?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordCode: 'CoreWordCode',
      coreWordName: 'CoreWordName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordCode: 'string',
      coreWordName: 'string',
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
  description?: string;
  dialogId?: number;
  dialogName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dialogId: 'DialogId',
      dialogName: 'DialogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dialogId: 'number',
      dialogName: 'string',
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
  moduleDefinition?: UpdateDialogFlowRequestModuleDefinition;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      moduleDefinition: 'ModuleDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      moduleDefinition: UpdateDialogFlowRequestModuleDefinition,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDialogFlowShrinkRequest extends $tea.Model {
  dialogId?: number;
  moduleDefinitionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      moduleDefinitionShrink: 'ModuleDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      moduleDefinitionShrink: 'string',
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
  members?: UpdateEntityRequestMembers[];
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      members: 'Members',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      members: { 'type': 'array', 'itemType': UpdateEntityRequestMembers },
      regex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityShrinkRequest extends $tea.Model {
  entityId?: number;
  entityName?: string;
  entityType?: string;
  membersShrink?: string;
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      membersShrink: 'Members',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      membersShrink: 'string',
      regex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityResponseBody extends $tea.Model {
  entityId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
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
  intentDefinition?: IntentCreateDTO;
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      intentDefinition: 'IntentDefinition',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentDefinition: IntentCreateDTO,
      intentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentShrinkRequest extends $tea.Model {
  intentDefinitionShrink?: string;
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      intentDefinitionShrink: 'IntentDefinition',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentDefinitionShrink: 'string',
      intentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntentResponseBody extends $tea.Model {
  intentId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      requestId: 'string',
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
  knowledge?: UpdateKnowledgeRequestKnowledge;
  static names(): { [key: string]: string } {
    return {
      knowledge: 'Knowledge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledge: UpdateKnowledgeRequestKnowledge,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeShrinkRequest extends $tea.Model {
  knowledgeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeShrink: 'Knowledge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeResponseBody extends $tea.Model {
  knowledgeId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      requestId: 'string',
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
  name?: string;
  perspectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      perspectiveId: 'PerspectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      perspectiveId: 'string',
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

export class AppendEntityMemberRequestMember extends $tea.Model {
  memberName?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
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
  answerSource?: string;
  category?: string;
  content?: string;
  contentType?: string;
  hitStatement?: string;
  id?: string;
  relatedKnowledges?: ChatResponseBodyMessagesKnowledgeRelatedKnowledges[];
  score?: number;
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      category: 'Category',
      content: 'Content',
      contentType: 'ContentType',
      hitStatement: 'HitStatement',
      id: 'Id',
      relatedKnowledges: 'RelatedKnowledges',
      score: 'Score',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      category: 'string',
      content: 'string',
      contentType: 'string',
      hitStatement: 'string',
      id: 'string',
      relatedKnowledges: { 'type': 'array', 'itemType': ChatResponseBodyMessagesKnowledgeRelatedKnowledges },
      score: 'number',
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesRecommends extends $tea.Model {
  answerSource?: string;
  category?: string;
  content?: string;
  knowledgeId?: string;
  score?: number;
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      category: 'Category',
      content: 'Content',
      knowledgeId: 'KnowledgeId',
      score: 'Score',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      category: 'string',
      content: 'string',
      knowledgeId: 'string',
      score: 'number',
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesTextSlots extends $tea.Model {
  isHit?: boolean;
  name?: string;
  origin?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isHit: 'IsHit',
      name: 'Name',
      origin: 'Origin',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHit: 'boolean',
      name: 'string',
      origin: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessagesText extends $tea.Model {
  answerSource?: string;
  articleTitle?: string;
  content?: string;
  contentType?: string;
  dialogName?: string;
  ext?: { [key: string]: any };
  externalFlags?: { [key: string]: any };
  hitStatement?: string;
  intentName?: string;
  metaData?: string;
  nodeId?: string;
  nodeName?: string;
  score?: number;
  slots?: ChatResponseBodyMessagesTextSlots[];
  userDefinedChatTitle?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      articleTitle: 'ArticleTitle',
      content: 'Content',
      contentType: 'ContentType',
      dialogName: 'DialogName',
      ext: 'Ext',
      externalFlags: 'ExternalFlags',
      hitStatement: 'HitStatement',
      intentName: 'IntentName',
      metaData: 'MetaData',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      score: 'Score',
      slots: 'Slots',
      userDefinedChatTitle: 'UserDefinedChatTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      articleTitle: 'string',
      content: 'string',
      contentType: 'string',
      dialogName: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      externalFlags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hitStatement: 'string',
      intentName: 'string',
      metaData: 'string',
      nodeId: 'string',
      nodeName: 'string',
      score: 'number',
      slots: { 'type': 'array', 'itemType': ChatResponseBodyMessagesTextSlots },
      userDefinedChatTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyMessages extends $tea.Model {
  answerSource?: string;
  answerType?: string;
  knowledge?: ChatResponseBodyMessagesKnowledge;
  recommends?: ChatResponseBodyMessagesRecommends[];
  text?: ChatResponseBodyMessagesText;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      answerType: 'AnswerType',
      knowledge: 'Knowledge',
      recommends: 'Recommends',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      answerType: 'string',
      knowledge: ChatResponseBodyMessagesKnowledge,
      recommends: { 'type': 'array', 'itemType': ChatResponseBodyMessagesRecommends },
      text: ChatResponseBodyMessagesText,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityRequestMembers extends $tea.Model {
  memberName?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeRequestKnowledgeOutlines extends $tea.Model {
  knowledgeId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeRequestKnowledgeSimQuestions extends $tea.Model {
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

export class CreateKnowledgeRequestKnowledgeSolutions extends $tea.Model {
  content?: string;
  perspectiveIds?: string[];
  plainText?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      perspectiveIds: 'PerspectiveIds',
      plainText: 'PlainText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      perspectiveIds: { 'type': 'array', 'itemType': 'string' },
      plainText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeRequestKnowledge extends $tea.Model {
  categoryId?: number;
  endDate?: string;
  knowledgeTitle?: string;
  knowledgeType?: number;
  outlines?: CreateKnowledgeRequestKnowledgeOutlines[];
  simQuestions?: CreateKnowledgeRequestKnowledgeSimQuestions[];
  solutions?: CreateKnowledgeRequestKnowledgeSolutions[];
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      endDate: 'EndDate',
      knowledgeTitle: 'KnowledgeTitle',
      knowledgeType: 'KnowledgeType',
      outlines: 'Outlines',
      simQuestions: 'SimQuestions',
      solutions: 'Solutions',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      endDate: 'string',
      knowledgeTitle: 'string',
      knowledgeType: 'number',
      outlines: { 'type': 'array', 'itemType': CreateKnowledgeRequestKnowledgeOutlines },
      simQuestions: { 'type': 'array', 'itemType': CreateKnowledgeRequestKnowledgeSimQuestions },
      solutions: { 'type': 'array', 'itemType': CreateKnowledgeRequestKnowledgeSolutions },
      startDate: 'string',
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

export class DescribeEntitiesResponseBodyMembers extends $tea.Model {
  memberName?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBodyRuleCheck extends $tea.Model {
  error?: string[];
  strict?: boolean;
  text?: string;
  warning?: string[];
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      strict: 'Strict',
      text: 'Text',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: { 'type': 'array', 'itemType': 'string' },
      strict: 'boolean',
      text: 'string',
      warning: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBodySlotTags extends $tea.Model {
  userSayId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      userSayId: 'UserSayId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userSayId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBodySlot extends $tea.Model {
  isArray?: boolean;
  isNecessary?: boolean;
  lifeSpan?: number;
  name?: string;
  question?: string[];
  slotId?: string;
  tags?: DescribeIntentResponseBodySlotTags[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isArray: 'IsArray',
      isNecessary: 'IsNecessary',
      lifeSpan: 'LifeSpan',
      name: 'Name',
      question: 'Question',
      slotId: 'SlotId',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isArray: 'boolean',
      isNecessary: 'boolean',
      lifeSpan: 'number',
      name: 'string',
      question: { 'type': 'array', 'itemType': 'string' },
      slotId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeIntentResponseBodySlotTags },
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBodyUserSayData extends $tea.Model {
  slotId?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      slotId: 'SlotId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slotId: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBodyUserSay extends $tea.Model {
  data?: DescribeIntentResponseBodyUserSayData[];
  strict?: boolean;
  userSayId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      strict: 'Strict',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeIntentResponseBodyUserSayData },
      strict: 'boolean',
      userSayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeResponseBodyOutlines extends $tea.Model {
  knowledgeId?: number;
  outlineId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      outlineId: 'OutlineId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      outlineId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeResponseBodySimQuestions extends $tea.Model {
  createTime?: string;
  modifyTime?: string;
  simQuestionId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      simQuestionId: 'SimQuestionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      simQuestionId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeResponseBodySolutions extends $tea.Model {
  content?: string;
  createTime?: string;
  modifyTime?: string;
  perspectiveIds?: string[];
  plainText?: string;
  solutionId?: number;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      perspectiveIds: 'PerspectiveIds',
      plainText: 'PlainText',
      solutionId: 'SolutionId',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      modifyTime: 'string',
      perspectiveIds: { 'type': 'array', 'itemType': 'string' },
      plainText: 'string',
      solutionId: 'number',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBotsResponseBodyBots extends $tea.Model {
  avatar?: string;
  createTime?: string;
  instanceId?: string;
  introduction?: string;
  languageCode?: string;
  name?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createTime: 'string',
      instanceId: 'string',
      introduction: 'string',
      languageCode: 'string',
      name: 'string',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCoreWordsResponseBodyCoreWords extends $tea.Model {
  coreWordCode?: string;
  coreWordName?: string;
  createTime?: string;
  modifyTime?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      coreWordCode: 'CoreWordCode',
      coreWordName: 'CoreWordName',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordCode: 'string',
      coreWordName: 'string',
      createTime: 'string',
      modifyTime: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDialogsResponseBodyDialogs extends $tea.Model {
  createTime?: string;
  createUserId?: string;
  createUserName?: string;
  description?: string;
  dialogId?: number;
  dialogName?: string;
  isOnline?: boolean;
  isSampleDialog?: boolean;
  modifyTime?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      description: 'Description',
      dialogId: 'DialogId',
      dialogName: 'DialogName',
      isOnline: 'IsOnline',
      isSampleDialog: 'IsSampleDialog',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      description: 'string',
      dialogId: 'number',
      dialogName: 'string',
      isOnline: 'boolean',
      isSampleDialog: 'boolean',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntitiesResponseBodyEntitiesMembers extends $tea.Model {
  memberName?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntitiesResponseBodyEntities extends $tea.Model {
  createTime?: string;
  createUserId?: string;
  createUserName?: string;
  entityId?: number;
  entityName?: string;
  entityType?: string;
  members?: QueryEntitiesResponseBodyEntitiesMembers[];
  modifyTime?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      members: 'Members',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      members: { 'type': 'array', 'itemType': QueryEntitiesResponseBodyEntitiesMembers },
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      regex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBodyIntentsRuleCheck extends $tea.Model {
  error?: string[];
  strict?: boolean;
  text?: string;
  warning?: string[];
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      strict: 'Strict',
      text: 'Text',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: { 'type': 'array', 'itemType': 'string' },
      strict: 'boolean',
      text: 'string',
      warning: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBodyIntentsSlotTags extends $tea.Model {
  userSayId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      userSayId: 'UserSayId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userSayId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBodyIntentsSlot extends $tea.Model {
  isArray?: boolean;
  isNecessary?: boolean;
  lifeSpan?: number;
  name?: string;
  question?: string[];
  slotId?: string;
  tags?: QueryIntentsResponseBodyIntentsSlotTags[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isArray: 'IsArray',
      isNecessary: 'IsNecessary',
      lifeSpan: 'LifeSpan',
      name: 'Name',
      question: 'Question',
      slotId: 'SlotId',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isArray: 'boolean',
      isNecessary: 'boolean',
      lifeSpan: 'number',
      name: 'string',
      question: { 'type': 'array', 'itemType': 'string' },
      slotId: 'string',
      tags: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntentsSlotTags },
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBodyIntentsUserSayData extends $tea.Model {
  slotId?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      slotId: 'SlotId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slotId: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBodyIntentsUserSay extends $tea.Model {
  data?: QueryIntentsResponseBodyIntentsUserSayData[];
  strict?: boolean;
  userSayId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      strict: 'Strict',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntentsUserSayData },
      strict: 'boolean',
      userSayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBodyIntents extends $tea.Model {
  createTime?: string;
  createUserId?: string;
  createUserName?: string;
  intentId?: number;
  modifyTime?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  name?: string;
  ruleCheck?: QueryIntentsResponseBodyIntentsRuleCheck[];
  slot?: QueryIntentsResponseBodyIntentsSlot[];
  userSay?: QueryIntentsResponseBodyIntentsUserSay[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      intentId: 'IntentId',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      name: 'Name',
      ruleCheck: 'RuleCheck',
      slot: 'Slot',
      userSay: 'UserSay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      intentId: 'number',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      name: 'string',
      ruleCheck: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntentsRuleCheck },
      slot: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntentsSlot },
      userSay: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntentsUserSay },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgesResponseBodyKnowledges extends $tea.Model {
  categoryId?: number;
  coreWords?: string[];
  createTime?: string;
  createUserName?: string;
  endDate?: string;
  knowledgeId?: number;
  knowledgeStatus?: number;
  knowledgeTitle?: string;
  modifyTime?: string;
  modifyUserName?: string;
  startDate?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      coreWords: 'CoreWords',
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      knowledgeStatus: 'KnowledgeStatus',
      knowledgeTitle: 'KnowledgeTitle',
      modifyTime: 'ModifyTime',
      modifyUserName: 'ModifyUserName',
      startDate: 'StartDate',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      coreWords: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      createUserName: 'string',
      endDate: 'string',
      knowledgeId: 'number',
      knowledgeStatus: 'number',
      knowledgeTitle: 'string',
      modifyTime: 'string',
      modifyUserName: 'string',
      startDate: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPerspectivesResponseBodyPerspectives extends $tea.Model {
  createTime?: string;
  createUserName?: string;
  modifyTime?: string;
  modifyUserName?: string;
  name?: string;
  perspectiveCode?: string;
  perspectiveId?: string;
  selfDefine?: boolean;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      modifyTime: 'ModifyTime',
      modifyUserName: 'ModifyUserName',
      name: 'Name',
      perspectiveCode: 'PerspectiveCode',
      perspectiveId: 'PerspectiveId',
      selfDefine: 'SelfDefine',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserName: 'string',
      modifyTime: 'string',
      modifyUserName: 'string',
      name: 'string',
      perspectiveCode: 'string',
      perspectiveId: 'string',
      selfDefine: 'boolean',
      status: 'number',
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

export class RemoveEntityMemberRequestMember extends $tea.Model {
  memberName?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDialogFlowRequestModuleDefinition extends $tea.Model {
  globalVars?: { [key: string]: any };
  moduleDefinition?: PaasProcessData;
  static names(): { [key: string]: string } {
    return {
      globalVars: 'GlobalVars',
      moduleDefinition: 'ModuleDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalVars: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      moduleDefinition: PaasProcessData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityRequestMembers extends $tea.Model {
  memberName?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeRequestKnowledgeOutlines extends $tea.Model {
  action?: string;
  knowledgeId?: number;
  outlineId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      knowledgeId: 'KnowledgeId',
      outlineId: 'OutlineId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      knowledgeId: 'number',
      outlineId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeRequestKnowledgeSimQuestions extends $tea.Model {
  action?: string;
  simQuestionId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      simQuestionId: 'SimQuestionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      simQuestionId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeRequestKnowledgeSolutions extends $tea.Model {
  action?: string;
  content?: string;
  perspectiveIds?: string[];
  plainText?: string;
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      content: 'Content',
      perspectiveIds: 'PerspectiveIds',
      plainText: 'PlainText',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      content: 'string',
      perspectiveIds: { 'type': 'array', 'itemType': 'string' },
      plainText: 'string',
      solutionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeRequestKnowledge extends $tea.Model {
  categoryId?: number;
  endDate?: string;
  knowledgeId?: number;
  knowledgeTitle?: string;
  knowledgeType?: number;
  outlines?: UpdateKnowledgeRequestKnowledgeOutlines[];
  simQuestions?: UpdateKnowledgeRequestKnowledgeSimQuestions[];
  solutions?: UpdateKnowledgeRequestKnowledgeSolutions[];
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      knowledgeTitle: 'KnowledgeTitle',
      knowledgeType: 'KnowledgeType',
      outlines: 'Outlines',
      simQuestions: 'SimQuestions',
      solutions: 'Solutions',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      endDate: 'string',
      knowledgeId: 'number',
      knowledgeTitle: 'string',
      knowledgeType: 'number',
      outlines: { 'type': 'array', 'itemType': UpdateKnowledgeRequestKnowledgeOutlines },
      simQuestions: { 'type': 'array', 'itemType': UpdateKnowledgeRequestKnowledgeSimQuestions },
      solutions: { 'type': 'array', 'itemType': UpdateKnowledgeRequestKnowledgeSolutions },
      startDate: 'string',
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

  async appendEntityMemberWithOptions(tmpReq: AppendEntityMemberRequest, runtime: $Util.RuntimeOptions): Promise<AppendEntityMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new AppendEntityMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.member))) {
      request.memberShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.member), "Member", "json");
    }

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

  async createEntityWithOptions(tmpReq: CreateEntityRequest, runtime: $Util.RuntimeOptions): Promise<CreateEntityResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEntityResponse>(await this.doRPCRequest("CreateEntity", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEntityResponse({}));
  }

  async createEntity(request: CreateEntityRequest): Promise<CreateEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEntityWithOptions(request, runtime);
  }

  async createIntentWithOptions(tmpReq: CreateIntentRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntentResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateIntentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.intentDefinition))) {
      request.intentDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.intentDefinition), "IntentDefinition", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIntentResponse>(await this.doRPCRequest("CreateIntent", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIntentResponse({}));
  }

  async createIntent(request: CreateIntentRequest): Promise<CreateIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntentWithOptions(request, runtime);
  }

  async createKnowledgeWithOptions(tmpReq: CreateKnowledgeRequest, runtime: $Util.RuntimeOptions): Promise<CreateKnowledgeResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateKnowledgeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.knowledge))) {
      request.knowledgeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.knowledge), "Knowledge", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateKnowledgeResponse>(await this.doRPCRequest("CreateKnowledge", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateKnowledgeResponse({}));
  }

  async createKnowledge(request: CreateKnowledgeRequest): Promise<CreateKnowledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKnowledgeWithOptions(request, runtime);
  }

  async createPerspectiveWithOptions(request: CreatePerspectiveRequest, runtime: $Util.RuntimeOptions): Promise<CreatePerspectiveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePerspectiveResponse>(await this.doRPCRequest("CreatePerspective", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePerspectiveResponse({}));
  }

  async createPerspective(request: CreatePerspectiveRequest): Promise<CreatePerspectiveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPerspectiveWithOptions(request, runtime);
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

  async describeDialogFlowWithOptions(request: DescribeDialogFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDialogFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDialogFlowResponse>(await this.doRPCRequest("DescribeDialogFlow", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDialogFlowResponse({}));
  }

  async describeDialogFlow(request: DescribeDialogFlowRequest): Promise<DescribeDialogFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDialogFlowWithOptions(request, runtime);
  }

  async describeEntitiesWithOptions(request: DescribeEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEntitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEntitiesResponse>(await this.doRPCRequest("DescribeEntities", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEntitiesResponse({}));
  }

  async describeEntities(request: DescribeEntitiesRequest): Promise<DescribeEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEntitiesWithOptions(request, runtime);
  }

  async describeIntentWithOptions(request: DescribeIntentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIntentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIntentResponse>(await this.doRPCRequest("DescribeIntent", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIntentResponse({}));
  }

  async describeIntent(request: DescribeIntentRequest): Promise<DescribeIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIntentWithOptions(request, runtime);
  }

  async describeKnowledgeWithOptions(request: DescribeKnowledgeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKnowledgeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeKnowledgeResponse>(await this.doRPCRequest("DescribeKnowledge", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeKnowledgeResponse({}));
  }

  async describeKnowledge(request: DescribeKnowledgeRequest): Promise<DescribeKnowledgeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKnowledgeWithOptions(request, runtime);
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

  async getAsyncResultWithOptions(request: GetAsyncResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncResultResponse>(await this.doRPCRequest("GetAsyncResult", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncResultResponse({}));
  }

  async getAsyncResult(request: GetAsyncResultRequest): Promise<GetAsyncResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncResultWithOptions(request, runtime);
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

  async queryCategoriesWithOptions(request: QueryCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<QueryCategoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCategoriesResponse>(await this.doRPCRequest("QueryCategories", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCategoriesResponse({}));
  }

  async queryCategories(request: QueryCategoriesRequest): Promise<QueryCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCategoriesWithOptions(request, runtime);
  }

  async queryCoreWordsWithOptions(request: QueryCoreWordsRequest, runtime: $Util.RuntimeOptions): Promise<QueryCoreWordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCoreWordsResponse>(await this.doRPCRequest("QueryCoreWords", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCoreWordsResponse({}));
  }

  async queryCoreWords(request: QueryCoreWordsRequest): Promise<QueryCoreWordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCoreWordsWithOptions(request, runtime);
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

  async queryEntitiesWithOptions(request: QueryEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<QueryEntitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEntitiesResponse>(await this.doRPCRequest("QueryEntities", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEntitiesResponse({}));
  }

  async queryEntities(request: QueryEntitiesRequest): Promise<QueryEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEntitiesWithOptions(request, runtime);
  }

  async queryIntentsWithOptions(request: QueryIntentsRequest, runtime: $Util.RuntimeOptions): Promise<QueryIntentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryIntentsResponse>(await this.doRPCRequest("QueryIntents", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryIntentsResponse({}));
  }

  async queryIntents(request: QueryIntentsRequest): Promise<QueryIntentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIntentsWithOptions(request, runtime);
  }

  async queryKnowledgesWithOptions(request: QueryKnowledgesRequest, runtime: $Util.RuntimeOptions): Promise<QueryKnowledgesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryKnowledgesResponse>(await this.doRPCRequest("QueryKnowledges", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryKnowledgesResponse({}));
  }

  async queryKnowledges(request: QueryKnowledgesRequest): Promise<QueryKnowledgesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryKnowledgesWithOptions(request, runtime);
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

  async removeEntityMemberWithOptions(tmpReq: RemoveEntityMemberRequest, runtime: $Util.RuntimeOptions): Promise<RemoveEntityMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveEntityMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.member))) {
      request.memberShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.member), "Member", "json");
    }

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

  async updateDialogFlowWithOptions(tmpReq: UpdateDialogFlowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDialogFlowResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDialogFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.moduleDefinition))) {
      request.moduleDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.moduleDefinition), "ModuleDefinition", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDialogFlowResponse>(await this.doRPCRequest("UpdateDialogFlow", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDialogFlowResponse({}));
  }

  async updateDialogFlow(request: UpdateDialogFlowRequest): Promise<UpdateDialogFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDialogFlowWithOptions(request, runtime);
  }

  async updateEntityWithOptions(tmpReq: UpdateEntityRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEntityResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEntityResponse>(await this.doRPCRequest("UpdateEntity", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEntityResponse({}));
  }

  async updateEntity(request: UpdateEntityRequest): Promise<UpdateEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEntityWithOptions(request, runtime);
  }

  async updateIntentWithOptions(tmpReq: UpdateIntentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIntentResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateIntentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.intentDefinition))) {
      request.intentDefinitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.intentDefinition), "IntentDefinition", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIntentResponse>(await this.doRPCRequest("UpdateIntent", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIntentResponse({}));
  }

  async updateIntent(request: UpdateIntentRequest): Promise<UpdateIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIntentWithOptions(request, runtime);
  }

  async updateKnowledgeWithOptions(tmpReq: UpdateKnowledgeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateKnowledgeResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateKnowledgeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.knowledge))) {
      request.knowledgeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.knowledge), "Knowledge", "json");
    }

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
