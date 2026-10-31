// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumePhysicalNodeRequestResumeCommand extends $dara.Model {
  /**
   * @remarks
   * The list of node IDs.
   * 
   * This parameter is required.
   */
  nodeIdList?: string[];
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 102011
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeIdList: 'NodeIdList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIdList)) {
      $dara.Model.validateArray(this.nodeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePhysicalNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment 
   * - PROD: production environment. This is the default value.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The request to resume scheduling.
   * 
   * This parameter is required.
   */
  resumeCommand?: ResumePhysicalNodeRequestResumeCommand;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      resumeCommand: 'ResumeCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      resumeCommand: ResumePhysicalNodeRequestResumeCommand,
    };
  }

  validate() {
    if(this.resumeCommand && typeof (this.resumeCommand as any).validate === 'function') {
      (this.resumeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

