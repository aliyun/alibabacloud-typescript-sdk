// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSpaceResponseBodyMseNamespace extends $dara.Model {
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

export class GetAgentSpaceResponseBody extends $dara.Model {
  agentSpace?: string;
  cmsWorkspace?: string;
  cmsWorkspaceBindType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  createTime?: string;
  description?: string;
  mseNamespace?: GetAgentSpaceResponseBodyMseNamespace;
  regionId?: string;
  requestId?: string;
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
      cmsWorkspaceBindType: 'cmsWorkspaceBindType',
      createTime: 'createTime',
      description: 'description',
      mseNamespace: 'mseNamespace',
      regionId: 'regionId',
      requestId: 'requestId',
      slsProject: 'slsProject',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      cmsWorkspace: 'string',
      cmsWorkspaceBindType: 'string',
      createTime: 'string',
      description: 'string',
      mseNamespace: GetAgentSpaceResponseBodyMseNamespace,
      regionId: 'string',
      requestId: 'string',
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

