// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clusterConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102311
   */
  id?: number;
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
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfigShrink: 'ClusterConfig',
      id: 'Id',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfigShrink: 'string',
      id: 'number',
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

