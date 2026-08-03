// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsResponseBodyList extends $dara.Model {
  agentIconUrl?: string;
  agentId?: string;
  agentName?: string;
  agentScene?: string;
  characterAgeStage?: string;
  characterName?: string;
  charactersDescription?: string;
  enableInteraction?: number;
  industry?: string;
  onlineSearch?: boolean;
  owner?: string;
  referenceUrl?: string;
  status?: number;
  textStyle?: string;
  viewer?: string;
  static names(): { [key: string]: string } {
    return {
      agentIconUrl: 'agentIconUrl',
      agentId: 'agentId',
      agentName: 'agentName',
      agentScene: 'agentScene',
      characterAgeStage: 'characterAgeStage',
      characterName: 'characterName',
      charactersDescription: 'charactersDescription',
      enableInteraction: 'enableInteraction',
      industry: 'industry',
      onlineSearch: 'onlineSearch',
      owner: 'owner',
      referenceUrl: 'referenceUrl',
      status: 'status',
      textStyle: 'textStyle',
      viewer: 'viewer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIconUrl: 'string',
      agentId: 'string',
      agentName: 'string',
      agentScene: 'string',
      characterAgeStage: 'string',
      characterName: 'string',
      charactersDescription: 'string',
      enableInteraction: 'number',
      industry: 'string',
      onlineSearch: 'boolean',
      owner: 'string',
      referenceUrl: 'string',
      status: 'number',
      textStyle: 'string',
      viewer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponseBody extends $dara.Model {
  list?: ListAgentsResponseBodyList[];
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAgentsResponseBodyList },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

