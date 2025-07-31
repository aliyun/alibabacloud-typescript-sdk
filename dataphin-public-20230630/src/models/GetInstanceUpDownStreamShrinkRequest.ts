// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceUpDownStreamShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIdShrink?: string;
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
   * 
   * @example
   * 1001121
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
      instanceIdShrink: 'InstanceId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      upStreamDepth: 'UpStreamDepth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceIdShrink: 'string',
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

