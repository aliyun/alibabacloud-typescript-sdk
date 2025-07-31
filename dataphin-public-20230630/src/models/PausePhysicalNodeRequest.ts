// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PausePhysicalNodeRequestPauseCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13222210
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

export class PausePhysicalNodeRequest extends $dara.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pauseCommand?: PausePhysicalNodeRequestPauseCommand;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      pauseCommand: 'PauseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      pauseCommand: PausePhysicalNodeRequestPauseCommand,
    };
  }

  validate() {
    if(this.pauseCommand && typeof (this.pauseCommand as any).validate === 'function') {
      (this.pauseCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

