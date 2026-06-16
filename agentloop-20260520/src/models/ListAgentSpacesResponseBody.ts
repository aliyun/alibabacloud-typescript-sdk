// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSpacesResponseBodyAgentSpacesMseNamespace extends $dara.Model {
  namespaceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'namespaceId',
      namespaceName: 'namespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  agentSpace?: string;
  cmsWorkspace?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  createTime?: string;
  description?: string;
  mseNamespace?: ListAgentSpacesResponseBodyAgentSpacesMseNamespace;
  regionId?: string;
  slsProject?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
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
  agentSpaces?: ListAgentSpacesResponseBodyAgentSpaces[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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

