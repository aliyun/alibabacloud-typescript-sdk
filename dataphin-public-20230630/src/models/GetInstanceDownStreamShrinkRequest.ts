// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDownStreamShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
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
  instanceGetShrink?: string;
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
   * SUCCESS
   */
  runStatus?: string;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      instanceGetShrink: 'InstanceGet',
      opTenantId: 'OpTenantId',
      runStatus: 'RunStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceGetShrink: 'string',
      opTenantId: 'number',
      runStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

