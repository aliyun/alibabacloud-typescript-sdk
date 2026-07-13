// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkersShrinkRequest extends $dara.Model {
  agentType?: string;
  credential?: string;
  groupShrink?: string;
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
  templateShrink?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      credential: 'Credential',
      groupShrink: 'Group',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      mcp: 'Mcp',
      modelName: 'ModelName',
      modelProvider: 'ModelProvider',
      nameLike: 'NameLike',
      nextToken: 'NextToken',
      templateShrink: 'Template',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      credential: 'string',
      groupShrink: 'string',
      instanceId: 'string',
      maxResults: 'number',
      mcp: 'string',
      modelName: 'string',
      modelProvider: 'string',
      nameLike: 'string',
      nextToken: 'string',
      templateShrink: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

