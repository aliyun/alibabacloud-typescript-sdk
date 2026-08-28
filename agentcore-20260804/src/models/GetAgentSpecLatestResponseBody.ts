// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataResourceValue } from "./DataResourceValue";


export class GetAgentSpecLatestResponseBodyDataMcpServers extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * agentspec-example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetAgentSpecLatestResponseBodyDataSkills extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * agentspec-example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetAgentSpecLatestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business tags.
   * 
   * @example
   * Sample property value
   */
  bizTags?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * A sample description that explains the purpose of the resource
   */
  description?: string;
  /**
   * @remarks
   * The download count.
   * 
   * @example
   * 10
   */
  downloadCount?: number;
  /**
   * @remarks
   * Indicates whether the AgentSpec is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of MCP server references.
   */
  mcpServers?: GetAgentSpecLatestResponseBodyDataMcpServers[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * agentspec-example
   */
  name?: string;
  /**
   * @remarks
   * The resource file mapping.
   */
  resource?: { [key: string]: DataResourceValue };
  /**
   * @remarks
   * The visibility scope.
   * 
   * @example
   * PRIVATE
   */
  scope?: string;
  /**
   * @remarks
   * The list of skill references.
   */
  skills?: GetAgentSpecLatestResponseBodyDataSkills[];
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1787671022000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizTags: 'bizTags',
      content: 'content',
      description: 'description',
      downloadCount: 'downloadCount',
      enable: 'enable',
      mcpServers: 'mcpServers',
      name: 'name',
      resource: 'resource',
      scope: 'scope',
      skills: 'skills',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: 'string',
      content: 'string',
      description: 'string',
      downloadCount: 'number',
      enable: 'boolean',
      mcpServers: { 'type': 'array', 'itemType': GetAgentSpecLatestResponseBodyDataMcpServers },
      name: 'string',
      resource: { 'type': 'map', 'keyType': 'string', 'valueType': DataResourceValue },
      scope: 'string',
      skills: { 'type': 'array', 'itemType': GetAgentSpecLatestResponseBodyDataSkills },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mcpServers)) {
      $dara.Model.validateArray(this.mcpServers);
    }
    if(this.resource) {
      $dara.Model.validateMap(this.resource);
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentSpecLatestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAgentSpecLatestResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAgentSpecLatestResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

