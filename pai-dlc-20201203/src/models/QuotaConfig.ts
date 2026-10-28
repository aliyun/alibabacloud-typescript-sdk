// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum allowed priority.
   * 
   * @example
   * 9
   */
  allowedMaxPriority?: number;
  /**
   * @remarks
   * Specifies whether DLC is enabled.
   */
  enableDLC?: boolean;
  /**
   * @remarks
   * Specifies whether DSW is enabled.
   */
  enableDSW?: boolean;
  /**
   * @remarks
   * Specifies whether to use tide resources.
   */
  enableTideResource?: boolean;
  /**
   * @remarks
   * The resource level (L0, L1).
   * 
   * @example
   * L0
   */
  resourceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      allowedMaxPriority: 'AllowedMaxPriority',
      enableDLC: 'EnableDLC',
      enableDSW: 'EnableDSW',
      enableTideResource: 'EnableTideResource',
      resourceLevel: 'ResourceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedMaxPriority: 'number',
      enableDLC: 'boolean',
      enableDSW: 'boolean',
      enableTideResource: 'boolean',
      resourceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

