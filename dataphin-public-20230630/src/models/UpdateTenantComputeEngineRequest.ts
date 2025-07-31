// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTenantComputeEngineRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clusterUrlList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MacCompute
   */
  type?: string;
  /**
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clusterUrlList: 'ClusterUrlList',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterUrlList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterUrlList)) {
      $dara.Model.validateArray(this.clusterUrlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantComputeEngineRequest extends $dara.Model {
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
  updateCommand?: UpdateTenantComputeEngineRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateTenantComputeEngineRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

