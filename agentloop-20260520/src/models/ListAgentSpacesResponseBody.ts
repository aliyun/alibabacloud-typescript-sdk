// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSpacesResponseBodyAgentSpacesMseNamespace extends $dara.Model {
  bindType?: string;
  /**
   * @remarks
   * The MSE namespace ID.
   * 
   * @example
   * phoenixcloud-raw-logs
   */
  namespaceId?: string;
  /**
   * @remarks
   * The MSE namespace name.
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

export class ListAgentSpacesResponseBodyAgentSpaces extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name.
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
   * The Simple Log Service project name.
   * 
   * @example
   * default-cms-1152309027070167-cn-beijing
   */
  slsProject?: string;
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
      updateTime: 'string',
    };
  }

  validate() {
    if(this.mseNamespace && typeof (this.mseNamespace as any).validate === 'function') {
      (this.mseNamespace as any).validate();
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
   * The AgentSpaces information.
   */
  agentSpaces?: ListAgentSpacesResponseBodyAgentSpaces[];
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. This parameter is empty if no more pages are available.
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

