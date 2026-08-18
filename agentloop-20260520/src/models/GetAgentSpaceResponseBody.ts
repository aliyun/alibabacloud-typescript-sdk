// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentSpaceResponseBodyMseNamespace extends $dara.Model {
  bindType?: string;
  /**
   * @remarks
   * The ID of the MSE namespace.
   * 
   * @example
   * emr-dataware
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

export class GetAgentSpaceResponseBody extends $dara.Model {
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
   * The CloudMonitor workspace.
   * 
   * @example
   * test-cms-workspace
   */
  cmsWorkspace?: string;
  /**
   * @remarks
   * The binding type of the CloudMonitor 2.0 workspace.
   * 
   * @example
   * AutoCreated
   */
  cmsWorkspaceBindType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-05-05T12:39:36Z
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
  mseNamespace?: GetAgentSpaceResponseBodyMseNamespace;
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
   * The request ID.
   * 
   * @example
   * D0173835-9E0F-508F-8BFA-9F556E59C302
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * default-cms-1837787111545040-cn-beijing
   */
  slsProject?: string;
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-10-20T02:28:14Z
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

