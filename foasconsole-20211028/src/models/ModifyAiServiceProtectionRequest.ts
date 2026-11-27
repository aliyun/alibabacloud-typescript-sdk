// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAiServiceProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable protection against manual shutdown operations.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The region ID. It must match the region where the API endpoint is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
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

