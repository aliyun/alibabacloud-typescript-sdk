// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAiServiceProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable manual shutdown protection.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'boolean',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

