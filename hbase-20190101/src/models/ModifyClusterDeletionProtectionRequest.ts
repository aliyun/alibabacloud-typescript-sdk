// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterDeletionProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-****************
   */
  clusterId?: string;
  /**
   * @remarks
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

