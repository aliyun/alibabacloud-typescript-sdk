// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeUpDownStreamShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 113123
   */
  projectId?: number;
  /**
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

