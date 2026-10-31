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
   * - DEV: Development environment.
   * - PROD: Production environment.
   * Default value: PROD.
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
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
      opUserId: 'OpUserId',
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
      opUserId: 'string',
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

