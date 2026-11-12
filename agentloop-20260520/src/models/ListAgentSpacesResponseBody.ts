// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSpacesResponseBodyAgentSpacesMseNamespace extends $dara.Model {
  /**
   * @remarks
   * The method used to attach the MSE namespace. AutoCreated indicates automatic creation by AgentLoop. UserSelected indicates that an existing namespace is selected and attached when the AgentSpace is created.
   * 
   * @example
   * AutoCreated
   */
  bindType?: string;
  /**
   * @remarks
   * The ID of the MSE namespace.
   * 
   * @example
   * phoenixcloud-raw-logs
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the MSE namespace.
   * 
   * @example
   * terraform-alicloud-modules
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      bindType: 'bindType',
      namespaceId: 'namespaceId',
      namespaceName: 'namespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindType: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSpacesResponseBodyAgentSpacesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value, which can be an empty string.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSpacesResponseBodyAgentSpaces extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace.
   * 
   * @example
   * test-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The CMS workspace.
   * 
   * @example
   * test-cms-workspace
   */
  cmsWorkspace?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2023-08-23T04:06:06Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The MSE namespace.
   */
  mseNamespace?: ListAgentSpacesResponseBodyAgentSpacesMseNamespace;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * default-cms-1152309027070167-cn-beijing
   */
  slsProject?: string;
  /**
   * @remarks
   * Returns only the tags of AgentSpaces that are active in the current region and match the local instance. An empty array is returned when it is confirmed that there are no tags. This field is omitted for entries in other regions, inactive entries, or entries that do not match the local instance. Omission of this field does not indicate the absence of tags.
   * 
   * @example
   * [{\\"key\\": \\"env\\", \\"value\\": \\"test\\"}]
   */
  tags?: ListAgentSpacesResponseBodyAgentSpacesTags[];
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-02-11T08:40:23Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      cmsWorkspace: 'cmsWorkspace',
      createTime: 'createTime',
      description: 'description',
      mseNamespace: 'mseNamespace',
      regionId: 'regionId',
      slsProject: 'slsProject',
      tags: 'tags',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      cmsWorkspace: 'string',
      createTime: 'string',
      description: 'string',
      mseNamespace: ListAgentSpacesResponseBodyAgentSpacesMseNamespace,
      regionId: 'string',
      slsProject: 'string',
      tags: { 'type': 'array', 'itemType': ListAgentSpacesResponseBodyAgentSpacesTags },
      updateTime: 'string',
    };
  }

  validate() {
    if(this.mseNamespace && typeof (this.mseNamespace as any).validate === 'function') {
      (this.mseNamespace as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentSpacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the AgentSpaces.
   */
  agentSpaces?: ListAgentSpacesResponseBodyAgentSpaces[];
  /**
   * @remarks
   * The maximum number of returned results.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. This parameter is empty if there are no more pages.
   * 
   * @example
   * b5754ef15c784abc8696d82790d2985c
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E4AC775-2358-5B52-B6FB-171459D7B14B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 13
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      agentSpaces: 'agentSpaces',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpaces: { 'type': 'array', 'itemType': ListAgentSpacesResponseBodyAgentSpaces },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentSpaces)) {
      $dara.Model.validateArray(this.agentSpaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

