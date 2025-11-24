// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMeshVersionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a precheck. Default value: false. If this parameter is set to true, this call only checks whether the current ASM instance meets the upgrade conditions and does not actually perform an upgrade.
   * 
   * @example
   * false
   */
  preCheck?: boolean;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      preCheck: 'PreCheck',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheck: 'boolean',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

