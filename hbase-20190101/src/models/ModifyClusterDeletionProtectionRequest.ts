// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterDeletionProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-****************
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * - true: Enables deletion protection. The cluster cannot be deleted when deletion protection is enabled.
   * - false: Disables deletion protection. The cluster can be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  protection?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      protection: 'Protection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      protection: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

