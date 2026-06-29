// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeUpDownStreamShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The downstream depth. Default value: 1.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment. 
   * - PROD (default): production environment.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   */
  nodeIdShrink?: string;
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
   * The project ID.
   * 
   * @example
   * 113123
   */
  projectId?: number;
  /**
   * @remarks
   * The upstream depth. Default value: 1.
   * 
   * @example
   * 1
   */
  upStreamDepth?: number;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      nodeIdShrink: 'NodeId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      upStreamDepth: 'UpStreamDepth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      nodeIdShrink: 'string',
      opTenantId: 'number',
      projectId: 'number',
      upStreamDepth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

