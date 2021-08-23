// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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

export class UpdateDialogFlowModuleDefinition extends $tea.Model {
  nodes?: PaasNodeDTO[];
  edges?: PaasEdgeDTO[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      edges: 'Edges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': PaasNodeDTO },
      edges: { 'type': 'array', 'itemType': PaasEdgeDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Children extends $tea.Model {
  categoryId?: number;
  parentCategoryId?: number;
  areaCode?: string;
  name?: string;
  childrens?: Children[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      parentCategoryId: 'ParentCategoryId',
      areaCode: 'AreaCode',
      name: 'Name',
      childrens: 'Childrens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      parentCategoryId: 'number',
      areaCode: 'string',
      name: 'string',
      childrens: { 'type': 'array', 'itemType': Children },
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

export class PaasNodeDTO extends $tea.Model {
  code?: string;
  id?: string;
  label?: string;
  xx?: number;
  yy?: number;
  pluginData?: PaasPluginDataDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      label: 'Label',
      xx: 'Xx',
      yy: 'Yy',
      pluginData: 'PluginData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      label: 'string',
      xx: 'number',
      yy: 'number',
      pluginData: PaasPluginDataDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntentCreateDTO extends $tea.Model {
  intentId?: number;
  name?: string;
  userSay?: UsersayMtopDTO[];
  ruleCheck?: RuleMtopDTO[];
  slot?: SlotrecordMtopDTO[];
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      name: 'Name',
      userSay: 'UserSay',
      ruleCheck: 'RuleCheck',
      slot: 'Slot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      name: 'string',
      userSay: { 'type': 'array', 'itemType': UsersayMtopDTO },
      ruleCheck: { 'type': 'array', 'itemType': RuleMtopDTO },
      slot: { 'type': 'array', 'itemType': SlotrecordMtopDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasFunctionPluginParams extends $tea.Model {
  method?: string;
  query?: { [key: string]: string };
  header?: { [key: string]: string };
  body?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'Method',
      query: 'Query',
      header: 'Header',
      body: 'Body',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      header: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
      url: 'string',
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

export class SlotrecordMtopDTO extends $tea.Model {
  id?: string;
  question?: string[];
  lifeSpan?: number;
  name?: string;
  isArray?: boolean;
  value?: string;
  isNecessary?: boolean;
  tags?: TagMtopDTO[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      question: 'Question',
      lifeSpan: 'LifeSpan',
      name: 'Name',
      isArray: 'IsArray',
      value: 'Value',
      isNecessary: 'IsNecessary',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      question: { 'type': 'array', 'itemType': 'string' },
      lifeSpan: 'number',
      name: 'string',
      isArray: 'boolean',
      value: 'string',
      isNecessary: 'boolean',
      tags: { 'type': 'array', 'itemType': TagMtopDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasFunctionPluginFieldDataDTO extends $tea.Model {
  function?: string;
  aliyunFunction?: string;
  type?: string;
  description?: string;
  endPoint?: string;
  code?: string;
  name?: string;
  aliyunService?: string;
  switch?: PaasSwitchCaseDTO[];
  params?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      aliyunFunction: 'AliyunFunction',
      type: 'Type',
      description: 'Description',
      endPoint: 'EndPoint',
      code: 'Code',
      name: 'Name',
      aliyunService: 'AliyunService',
      switch: 'Switch',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      aliyunFunction: 'string',
      type: 'string',
      description: 'string',
      endPoint: 'string',
      code: 'string',
      name: 'string',
      aliyunService: 'string',
      switch: { 'type': 'array', 'itemType': PaasSwitchCaseDTO },
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasSlotConfigDTO extends $tea.Model {
  isArray?: boolean;
  isNecessary?: boolean;
  value?: string;
  lifeSpan?: number;
  name?: string;
  question?: string[];
  static names(): { [key: string]: string } {
    return {
      isArray: 'IsArray',
      isNecessary: 'IsNecessary',
      value: 'Value',
      lifeSpan: 'LifeSpan',
      name: 'Name',
      question: 'Question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isArray: 'boolean',
      isNecessary: 'boolean',
      value: 'string',
      lifeSpan: 'number',
      name: 'string',
      question: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasConditionEntryDTO extends $tea.Model {
  id?: string;
  term?: string;
  name?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      term: 'Term',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      term: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
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

export class RuleMtopDTO extends $tea.Model {
  strict?: boolean;
  text?: string;
  warning?: string[];
  error?: string[];
  static names(): { [key: string]: string } {
    return {
      strict: 'Strict',
      text: 'Text',
      warning: 'Warning',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strict: 'boolean',
      text: 'string',
      warning: { 'type': 'array', 'itemType': 'string' },
      error: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasEdgeDTO extends $tea.Model {
  target?: string;
  id?: string;
  source?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
      id: 'Id',
      source: 'Source',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'string',
      id: 'string',
      source: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasSlotPluginFieldDataDTO extends $tea.Model {
  intentName?: string;
  intentId?: string;
  name?: string;
  isSysIntent?: boolean;
  contentSlot?: PaasSlotConfigDTO[];
  static names(): { [key: string]: string } {
    return {
      intentName: 'IntentName',
      intentId: 'IntentId',
      name: 'Name',
      isSysIntent: 'IsSysIntent',
      contentSlot: 'ContentSlot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentName: 'string',
      intentId: 'string',
      name: 'string',
      isSysIntent: 'boolean',
      contentSlot: { 'type': 'array', 'itemType': PaasSlotConfigDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasProcessData extends $tea.Model {
  nodes?: PaasNodeDTO[];
  edges?: PaasEdgeDTO[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      edges: 'Edges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': PaasNodeDTO },
      edges: { 'type': 'array', 'itemType': PaasEdgeDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasPluginDataDTO extends $tea.Model {
  entry?: PaasEntryDTO;
  slot?: PaasSlotDTO;
  response?: PaasResponseDTO;
  function?: PaasFunctionDTO;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
      slot: 'Slot',
      response: 'Response',
      function: 'Function',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: PaasEntryDTO,
      slot: PaasSlotDTO,
      response: PaasResponseDTO,
      function: PaasFunctionDTO,
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

export class PaasResponseNodeContentDTO extends $tea.Model {
  type?: string;
  text?: string;
  image?: string;
  buttonList?: PaasButtonListDTO;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      text: 'Text',
      image: 'Image',
      buttonList: 'ButtonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      text: 'string',
      image: 'string',
      buttonList: PaasButtonListDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaasResponsePluginFieldDataDTO extends $tea.Model {
  name?: string;
  contentResponse?: PaasResponseNodeContentDTO;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      contentResponse: 'ContentResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      contentResponse: PaasResponseNodeContentDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UsersayMtopDTO extends $tea.Model {
  id?: string;
  data?: SectionMtopDTO[];
  strict?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      data: 'Data',
      strict: 'Strict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      data: { 'type': 'array', 'itemType': SectionMtopDTO },
      strict: 'boolean',
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

export class CreateEntityRequest extends $tea.Model {
  dialogId?: number;
  entityName?: string;
  entityType?: string;
  regex?: string;
  members?: CreateEntityRequestMembers[];
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
      members: { 'type': 'array', 'itemType': CreateEntityRequestMembers },
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
  regex?: string;
  membersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dialogId: 'DialogId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      regex: 'Regex',
      membersShrink: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogId: 'number',
      entityName: 'string',
      entityType: 'string',
      regex: 'string',
      membersShrink: 'string',
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

export class PublishKnowledgeRequest extends $tea.Model {
  knowledgeId?: number;
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      async: 'Async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      async: 'boolean',
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

export class ListBotKnowledgeDetailsRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  limit?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
      limit: 'string',
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

export class QueryIntentsRequest extends $tea.Model {
  intentName?: string;
  dialogId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      intentName: 'IntentName',
      dialogId: 'DialogId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentName: 'string',
      dialogId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  intents?: QueryIntentsResponseBodyIntents[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      intents: 'Intents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      intents: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntents },
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

export class ListBotReceptionDetailDatasRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
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

export class AppendEntityMemberRequest extends $tea.Model {
  entityId?: number;
  applyType?: string;
  member?: AppendEntityMemberRequestMember;
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
      member: AppendEntityMemberRequestMember,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppendEntityMemberShrinkRequest extends $tea.Model {
  entityId?: number;
  applyType?: string;
  memberShrink?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      applyType: 'ApplyType',
      memberShrink: 'Member',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      applyType: 'string',
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

export class ListBotColdDsDatasRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
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

export class CreateBotRequest extends $tea.Model {
  languageCode?: string;
  name?: string;
  avatar?: string;
  introduction?: string;
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      languageCode: 'LanguageCode',
      name: 'Name',
      avatar: 'Avatar',
      introduction: 'Introduction',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languageCode: 'string',
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
  modifyTime?: string;
  requestId?: string;
  createTime?: string;
  dialogId?: number;
  createUserId?: string;
  createUserName?: string;
  name?: string;
  intentId?: number;
  type?: string;
  modifyUserId?: string;
  userSay?: DescribeIntentResponseBodyUserSay[];
  modifyUserName?: string;
  slot?: DescribeIntentResponseBodySlot[];
  ruleCheck?: DescribeIntentResponseBodyRuleCheck[];
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      dialogId: 'DialogId',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      name: 'Name',
      intentId: 'IntentId',
      type: 'Type',
      modifyUserId: 'ModifyUserId',
      userSay: 'UserSay',
      modifyUserName: 'ModifyUserName',
      slot: 'Slot',
      ruleCheck: 'RuleCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      requestId: 'string',
      createTime: 'string',
      dialogId: 'number',
      createUserId: 'string',
      createUserName: 'string',
      name: 'string',
      intentId: 'number',
      type: 'string',
      modifyUserId: 'string',
      userSay: { 'type': 'array', 'itemType': DescribeIntentResponseBodyUserSay },
      modifyUserName: 'string',
      slot: { 'type': 'array', 'itemType': DescribeIntentResponseBodySlot },
      ruleCheck: { 'type': 'array', 'itemType': DescribeIntentResponseBodyRuleCheck },
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
  dialogId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dialogId: 'DialogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dialogId: 'number',
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
  totalCount?: number;
  coreWords?: QueryCoreWordsResponseBodyCoreWords[];
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      coreWords: 'CoreWords',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      coreWords: { 'type': 'array', 'itemType': QueryCoreWordsResponseBodyCoreWords },
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
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

export class UpdateEntityRequest extends $tea.Model {
  entityId?: number;
  entityName?: string;
  entityType?: string;
  regex?: string;
  members?: UpdateEntityRequestMembers[];
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
      members: { 'type': 'array', 'itemType': UpdateEntityRequestMembers },
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
  regex?: string;
  membersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      regex: 'Regex',
      membersShrink: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      regex: 'string',
      membersShrink: 'string',
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

export class CreateIntentRequest extends $tea.Model {
  intentDefinition?: IntentCreateDTO;
  dialogId?: number;
  static names(): { [key: string]: string } {
    return {
      intentDefinition: 'IntentDefinition',
      dialogId: 'DialogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentDefinition: IntentCreateDTO,
      dialogId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentShrinkRequest extends $tea.Model {
  intentDefinitionShrink?: string;
  dialogId?: number;
  static names(): { [key: string]: string } {
    return {
      intentDefinitionShrink: 'IntentDefinition',
      dialogId: 'DialogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentDefinitionShrink: 'string',
      dialogId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentResponseBody extends $tea.Model {
  requestId?: string;
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      intentId: 'number',
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

export class QueryCategoriesRequest extends $tea.Model {
  parentCategoryId?: number;
  showChildrens?: boolean;
  knowledgeType?: number;
  static names(): { [key: string]: string } {
    return {
      parentCategoryId: 'ParentCategoryId',
      showChildrens: 'ShowChildrens',
      knowledgeType: 'KnowledgeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentCategoryId: 'number',
      showChildrens: 'boolean',
      knowledgeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCategoriesResponseBody extends $tea.Model {
  requestId?: string;
  categories?: Children[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      categories: { 'type': 'array', 'itemType': Children },
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

export class QueryKnowledgesRequest extends $tea.Model {
  knowledgeTitle?: string;
  coreWordName?: string;
  pageNumber?: number;
  pageSize?: number;
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeTitle: 'KnowledgeTitle',
      coreWordName: 'CoreWordName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeTitle: 'string',
      coreWordName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  knowledges?: QueryKnowledgesResponseBodyKnowledges[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      knowledges: 'Knowledges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      knowledges: { 'type': 'array', 'itemType': QueryKnowledgesResponseBodyKnowledges },
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
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
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
  requestId?: string;
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      intentId: 'number',
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
  status?: number;
  modifyTime?: string;
  accountId?: string;
  requestId?: string;
  instanceId?: string;
  moduleName?: string;
  createTime?: string;
  createUserId?: string;
  templates?: string;
  dialogId?: number;
  globalVars?: { [key: string]: any };
  createUserName?: string;
  moduleId?: number;
  moduleDefinition?: PaasProcessData;
  dialogName?: string;
  modifyUserId?: string;
  modifyUserName?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      accountId: 'AccountId',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      templates: 'Templates',
      dialogId: 'DialogId',
      globalVars: 'GlobalVars',
      createUserName: 'CreateUserName',
      moduleId: 'ModuleId',
      moduleDefinition: 'ModuleDefinition',
      dialogName: 'DialogName',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      modifyTime: 'string',
      accountId: 'string',
      requestId: 'string',
      instanceId: 'string',
      moduleName: 'string',
      createTime: 'string',
      createUserId: 'string',
      templates: 'string',
      dialogId: 'number',
      globalVars: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createUserName: 'string',
      moduleId: 'number',
      moduleDefinition: PaasProcessData,
      dialogName: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      tags: 'string',
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
  knowledgeTitle?: string;
  categoryId?: number;
  modifyTime?: string;
  coreWords?: string[];
  requestId?: string;
  createTime?: string;
  knowledgeId?: number;
  keyWords?: string[];
  endDate?: string;
  createUserName?: string;
  startDate?: string;
  simQuestions?: DescribeKnowledgeResponseBodySimQuestions[];
  solutions?: DescribeKnowledgeResponseBodySolutions[];
  version?: number;
  modifyUserName?: string;
  knowledgeStatus?: number;
  outlines?: DescribeKnowledgeResponseBodyOutlines[];
  knowledgeType?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeTitle: 'KnowledgeTitle',
      categoryId: 'CategoryId',
      modifyTime: 'ModifyTime',
      coreWords: 'CoreWords',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      knowledgeId: 'KnowledgeId',
      keyWords: 'KeyWords',
      endDate: 'EndDate',
      createUserName: 'CreateUserName',
      startDate: 'StartDate',
      simQuestions: 'SimQuestions',
      solutions: 'Solutions',
      version: 'Version',
      modifyUserName: 'ModifyUserName',
      knowledgeStatus: 'KnowledgeStatus',
      outlines: 'Outlines',
      knowledgeType: 'KnowledgeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeTitle: 'string',
      categoryId: 'number',
      modifyTime: 'string',
      coreWords: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      createTime: 'string',
      knowledgeId: 'number',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      endDate: 'string',
      createUserName: 'string',
      startDate: 'string',
      simQuestions: { 'type': 'array', 'itemType': DescribeKnowledgeResponseBodySimQuestions },
      solutions: { 'type': 'array', 'itemType': DescribeKnowledgeResponseBodySolutions },
      version: 'number',
      modifyUserName: 'string',
      knowledgeStatus: 'number',
      outlines: { 'type': 'array', 'itemType': DescribeKnowledgeResponseBodyOutlines },
      knowledgeType: 'number',
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
  requestId?: string;
  perspectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      perspectiveId: 'PerspectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      perspectiveId: 'string',
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

export class RemoveEntityMemberRequest extends $tea.Model {
  entityId?: number;
  removeType?: string;
  member?: RemoveEntityMemberRequestMember;
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
      member: RemoveEntityMemberRequestMember,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntityMemberShrinkRequest extends $tea.Model {
  entityId?: number;
  removeType?: string;
  memberShrink?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      removeType: 'RemoveType',
      memberShrink: 'Member',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      removeType: 'string',
      memberShrink: 'string',
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

export class GetBotDsStatDataRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  vendorParam?: string;
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
      vendorParam: 'VendorParam',
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
      vendorParam: 'string',
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

export class ListBotHotDsDatasRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
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

export class GetBotKnowledgeStatDataRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      intentId: 'number',
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

export class ListBotChatHistorysRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
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

export class ListBotColdKnowledgesRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
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

export class GetBotChatDataRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetBotSessionDataRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListBotHotKnowledgesRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
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

export class QueryEntitiesRequest extends $tea.Model {
  entityName?: string;
  dialogId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      entityName: 'EntityName',
      dialogId: 'DialogId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityName: 'string',
      dialogId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntitiesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  entities?: QueryEntitiesResponseBodyEntities[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      entities: 'Entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      entities: { 'type': 'array', 'itemType': QueryEntitiesResponseBodyEntities },
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

export class ListBotDsDetailsRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  robotInstanceId?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      robotInstanceId: 'RobotInstanceId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      robotInstanceId: 'string',
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

export class AssociateRequest extends $tea.Model {
  instanceId?: string;
  utterance?: string;
  sessionId?: string;
  recommendNum?: number;
  perspective?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      utterance: 'Utterance',
      sessionId: 'SessionId',
      recommendNum: 'RecommendNum',
      perspective: 'Perspective',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      utterance: 'string',
      sessionId: 'string',
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

export class CreateCategoryRequest extends $tea.Model {
  parentCategoryId?: number;
  name?: string;
  knowledgeType?: number;
  bizCode?: string;
  static names(): { [key: string]: string } {
    return {
      parentCategoryId: 'ParentCategoryId',
      name: 'Name',
      knowledgeType: 'KnowledgeType',
      bizCode: 'BizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentCategoryId: 'number',
      name: 'string',
      knowledgeType: 'number',
      bizCode: 'string',
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
  entityId?: number;
  entityType?: string;
  modifyTime?: string;
  modifyUserId?: string;
  requestId?: string;
  regex?: string;
  entityName?: string;
  createTime?: string;
  modifyUserName?: string;
  createUserId?: string;
  createUserName?: string;
  members?: DescribeEntitiesResponseBodyMembers[];
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      requestId: 'RequestId',
      regex: 'Regex',
      entityName: 'EntityName',
      createTime: 'CreateTime',
      modifyUserName: 'ModifyUserName',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      entityType: 'string',
      modifyTime: 'string',
      modifyUserId: 'string',
      requestId: 'string',
      regex: 'string',
      entityName: 'string',
      createTime: 'string',
      modifyUserName: 'string',
      createUserId: 'string',
      createUserName: 'string',
      members: { 'type': 'array', 'itemType': DescribeEntitiesResponseBodyMembers },
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

export class QueryIntentsResponseBodyIntentsSlotTags extends $tea.Model {
  value?: string;
  userSayId?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      userSayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBodyIntentsSlot extends $tea.Model {
  value?: string;
  lifeSpan?: number;
  slotId?: string;
  isNecessary?: boolean;
  isArray?: boolean;
  tags?: QueryIntentsResponseBodyIntentsSlotTags[];
  question?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      lifeSpan: 'LifeSpan',
      slotId: 'SlotId',
      isNecessary: 'IsNecessary',
      isArray: 'IsArray',
      tags: 'Tags',
      question: 'Question',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      lifeSpan: 'number',
      slotId: 'string',
      isNecessary: 'boolean',
      isArray: 'boolean',
      tags: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntentsSlotTags },
      question: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
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
  userSayId?: string;
  strict?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      userSayId: 'UserSayId',
      strict: 'Strict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntentsUserSayData },
      userSayId: 'string',
      strict: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBodyIntentsRuleCheck extends $tea.Model {
  error?: string[];
  warning?: string[];
  text?: string;
  strict?: boolean;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      warning: 'Warning',
      text: 'Text',
      strict: 'Strict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: { 'type': 'array', 'itemType': 'string' },
      warning: { 'type': 'array', 'itemType': 'string' },
      text: 'string',
      strict: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntentsResponseBodyIntents extends $tea.Model {
  modifyUserId?: string;
  modifyUserName?: string;
  createTime?: string;
  createUserName?: string;
  slot?: QueryIntentsResponseBodyIntentsSlot[];
  userSay?: QueryIntentsResponseBodyIntentsUserSay[];
  name?: string;
  ruleCheck?: QueryIntentsResponseBodyIntentsRuleCheck[];
  createUserId?: string;
  intentId?: number;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      slot: 'Slot',
      userSay: 'UserSay',
      name: 'Name',
      ruleCheck: 'RuleCheck',
      createUserId: 'CreateUserId',
      intentId: 'IntentId',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyUserId: 'string',
      modifyUserName: 'string',
      createTime: 'string',
      createUserName: 'string',
      slot: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntentsSlot },
      userSay: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntentsUserSay },
      name: 'string',
      ruleCheck: { 'type': 'array', 'itemType': QueryIntentsResponseBodyIntentsRuleCheck },
      createUserId: 'string',
      intentId: 'number',
      modifyTime: 'string',
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
  userSayId?: string;
  strict?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      userSayId: 'UserSayId',
      strict: 'Strict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeIntentResponseBodyUserSayData },
      userSayId: 'string',
      strict: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBodySlotTags extends $tea.Model {
  value?: string;
  userSayId?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      userSayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBodySlot extends $tea.Model {
  value?: string;
  lifeSpan?: number;
  slotId?: string;
  isNecessary?: boolean;
  isArray?: boolean;
  tags?: DescribeIntentResponseBodySlotTags[];
  question?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      lifeSpan: 'LifeSpan',
      slotId: 'SlotId',
      isNecessary: 'IsNecessary',
      isArray: 'IsArray',
      tags: 'Tags',
      question: 'Question',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      lifeSpan: 'number',
      slotId: 'string',
      isNecessary: 'boolean',
      isArray: 'boolean',
      tags: { 'type': 'array', 'itemType': DescribeIntentResponseBodySlotTags },
      question: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBodyRuleCheck extends $tea.Model {
  error?: string[];
  warning?: string[];
  text?: string;
  strict?: boolean;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      warning: 'Warning',
      text: 'Text',
      strict: 'Strict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: { 'type': 'array', 'itemType': 'string' },
      warning: { 'type': 'array', 'itemType': 'string' },
      text: 'string',
      strict: 'boolean',
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

export class QueryCoreWordsResponseBodyCoreWords extends $tea.Model {
  coreWordCode?: string;
  coreWordName?: string;
  synonyms?: string[];
  createTime?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      coreWordCode: 'CoreWordCode',
      coreWordName: 'CoreWordName',
      synonyms: 'Synonyms',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreWordCode: 'string',
      coreWordName: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      modifyTime: 'string',
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

export class QueryKnowledgesResponseBodyKnowledges extends $tea.Model {
  knowledgeStatus?: number;
  endDate?: string;
  knowledgeId?: number;
  createUserName?: string;
  createTime?: string;
  startDate?: string;
  knowledgeTitle?: string;
  modifyUserName?: string;
  coreWords?: string[];
  version?: string;
  categoryId?: number;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeStatus: 'KnowledgeStatus',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      createUserName: 'CreateUserName',
      createTime: 'CreateTime',
      startDate: 'StartDate',
      knowledgeTitle: 'KnowledgeTitle',
      modifyUserName: 'ModifyUserName',
      coreWords: 'CoreWords',
      version: 'Version',
      categoryId: 'CategoryId',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeStatus: 'number',
      endDate: 'string',
      knowledgeId: 'number',
      createUserName: 'string',
      createTime: 'string',
      startDate: 'string',
      knowledgeTitle: 'string',
      modifyUserName: 'string',
      coreWords: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
      categoryId: 'number',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeResponseBodySimQuestions extends $tea.Model {
  createTime?: string;
  simQuestionId?: number;
  title?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      simQuestionId: 'SimQuestionId',
      title: 'Title',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      simQuestionId: 'number',
      title: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeResponseBodySolutions extends $tea.Model {
  perspectiveIds?: string[];
  summary?: string;
  createTime?: string;
  plainText?: string;
  solutionId?: number;
  content?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      perspectiveIds: 'PerspectiveIds',
      summary: 'Summary',
      createTime: 'CreateTime',
      plainText: 'PlainText',
      solutionId: 'SolutionId',
      content: 'Content',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perspectiveIds: { 'type': 'array', 'itemType': 'string' },
      summary: 'string',
      createTime: 'string',
      plainText: 'string',
      solutionId: 'number',
      content: 'string',
      modifyTime: 'string',
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

export class QueryPerspectivesResponseBodyPerspectives extends $tea.Model {
  status?: number;
  modifyUserName?: string;
  createUserName?: string;
  createTime?: string;
  perspectiveId?: string;
  selfDefine?: boolean;
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
      selfDefine: 'boolean',
      name: 'string',
      perspectiveCode: 'string',
      modifyTime: 'string',
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

export class UpdateKnowledgeRequestKnowledgeSolutions extends $tea.Model {
  content?: string;
  plainText?: string;
  solutionId?: number;
  perspectiveIds?: string[];
  action?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      plainText: 'PlainText',
      solutionId: 'SolutionId',
      perspectiveIds: 'PerspectiveIds',
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      plainText: 'string',
      solutionId: 'number',
      perspectiveIds: { 'type': 'array', 'itemType': 'string' },
      action: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeRequestKnowledgeOutlines extends $tea.Model {
  knowledgeId?: number;
  title?: string;
  outlineId?: number;
  action?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      title: 'Title',
      outlineId: 'OutlineId',
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      title: 'string',
      outlineId: 'number',
      action: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeRequestKnowledgeSimQuestions extends $tea.Model {
  title?: string;
  simQuestionId?: number;
  action?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      simQuestionId: 'SimQuestionId',
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      simQuestionId: 'number',
      action: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKnowledgeRequestKnowledge extends $tea.Model {
  categoryId?: number;
  knowledgeTitle?: string;
  knowledgeType?: number;
  solutions?: UpdateKnowledgeRequestKnowledgeSolutions[];
  startDate?: string;
  endDate?: string;
  outlines?: UpdateKnowledgeRequestKnowledgeOutlines[];
  simQuestions?: UpdateKnowledgeRequestKnowledgeSimQuestions[];
  knowledgeId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      knowledgeTitle: 'KnowledgeTitle',
      knowledgeType: 'KnowledgeType',
      solutions: 'Solutions',
      startDate: 'StartDate',
      endDate: 'EndDate',
      outlines: 'Outlines',
      simQuestions: 'SimQuestions',
      knowledgeId: 'KnowledgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      knowledgeTitle: 'string',
      knowledgeType: 'number',
      solutions: { 'type': 'array', 'itemType': UpdateKnowledgeRequestKnowledgeSolutions },
      startDate: 'string',
      endDate: 'string',
      outlines: { 'type': 'array', 'itemType': UpdateKnowledgeRequestKnowledgeOutlines },
      simQuestions: { 'type': 'array', 'itemType': UpdateKnowledgeRequestKnowledgeSimQuestions },
      knowledgeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeRequestKnowledgeSolutions extends $tea.Model {
  content?: string;
  plainText?: string;
  perspectiveIds?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      plainText: 'PlainText',
      perspectiveIds: 'PerspectiveIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      plainText: 'string',
      perspectiveIds: { 'type': 'array', 'itemType': 'string' },
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

export class CreateKnowledgeRequestKnowledge extends $tea.Model {
  categoryId?: number;
  knowledgeTitle?: string;
  knowledgeType?: number;
  solutions?: CreateKnowledgeRequestKnowledgeSolutions[];
  startDate?: string;
  endDate?: string;
  outlines?: CreateKnowledgeRequestKnowledgeOutlines[];
  simQuestions?: CreateKnowledgeRequestKnowledgeSimQuestions[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      knowledgeTitle: 'KnowledgeTitle',
      knowledgeType: 'KnowledgeType',
      solutions: 'Solutions',
      startDate: 'StartDate',
      endDate: 'EndDate',
      outlines: 'Outlines',
      simQuestions: 'SimQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      knowledgeTitle: 'string',
      knowledgeType: 'number',
      solutions: { 'type': 'array', 'itemType': CreateKnowledgeRequestKnowledgeSolutions },
      startDate: 'string',
      endDate: 'string',
      outlines: { 'type': 'array', 'itemType': CreateKnowledgeRequestKnowledgeOutlines },
      simQuestions: { 'type': 'array', 'itemType': CreateKnowledgeRequestKnowledgeSimQuestions },
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

export class QueryEntitiesResponseBodyEntitiesMembers extends $tea.Model {
  synonyms?: string[];
  memberName?: string;
  static names(): { [key: string]: string } {
    return {
      synonyms: 'Synonyms',
      memberName: 'MemberName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synonyms: { 'type': 'array', 'itemType': 'string' },
      memberName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntitiesResponseBodyEntities extends $tea.Model {
  members?: QueryEntitiesResponseBodyEntitiesMembers[];
  modifyUserId?: string;
  modifyUserName?: string;
  entityId?: number;
  createUserName?: string;
  createTime?: string;
  regex?: string;
  entityType?: string;
  createUserId?: string;
  entityName?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      entityId: 'EntityId',
      createUserName: 'CreateUserName',
      createTime: 'CreateTime',
      regex: 'Regex',
      entityType: 'EntityType',
      createUserId: 'CreateUserId',
      entityName: 'EntityName',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': QueryEntitiesResponseBodyEntitiesMembers },
      modifyUserId: 'string',
      modifyUserName: 'string',
      entityId: 'number',
      createUserName: 'string',
      createTime: 'string',
      regex: 'string',
      entityType: 'string',
      createUserId: 'string',
      entityName: 'string',
      modifyTime: 'string',
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

export class DescribeEntitiesResponseBodyMembers extends $tea.Model {
  synonyms?: string[];
  memberName?: string;
  static names(): { [key: string]: string } {
    return {
      synonyms: 'Synonyms',
      memberName: 'MemberName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synonyms: { 'type': 'array', 'itemType': 'string' },
      memberName: 'string',
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

  async queryPerspectivesWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryPerspectivesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<QueryPerspectivesResponse>(await this.doRPCRequest("QueryPerspectives", "2017-10-11", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPerspectivesResponse({}));
  }

  async queryPerspectives(): Promise<QueryPerspectivesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPerspectivesWithOptions(runtime);
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

}
