// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkersRequestGroup extends $dara.Model {
  name?: string;
  role?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'string',
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

export class ListWorkersRequestTemplate extends $dara.Model {
  label?: string;
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkersRequest extends $dara.Model {
  agentType?: string;
  credential?: string;
  group?: ListWorkersRequestGroup;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  maxResults?: number;
  mcp?: string;
  modelName?: string;
  modelProvider?: string;
  nameLike?: string;
  nextToken?: string;
  template?: ListWorkersRequestTemplate;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      credential: 'Credential',
      group: 'Group',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      mcp: 'Mcp',
      modelName: 'ModelName',
      modelProvider: 'ModelProvider',
      nameLike: 'NameLike',
      nextToken: 'NextToken',
      template: 'Template',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      credential: 'string',
      group: ListWorkersRequestGroup,
      instanceId: 'string',
      maxResults: 'number',
      mcp: 'string',
      modelName: 'string',
      modelProvider: 'string',
      nameLike: 'string',
      nextToken: 'string',
      template: ListWorkersRequestTemplate,
      versionCode: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

