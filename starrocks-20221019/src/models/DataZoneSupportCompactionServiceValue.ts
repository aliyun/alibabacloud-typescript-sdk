// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataZoneSupportCompactionServiceValue extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-*******n-f
   */
  zoneId?: string;
  /**
   * @remarks
   * The resource level.
   * 
   * @example
   * MEDIUM
   */
  resourceLevel?: string;
  /**
   * @remarks
   * Indicates whether the configuration is recommended.
   */
  recommended?: boolean;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'zoneId',
      resourceLevel: 'resourceLevel',
      recommended: 'recommended',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      resourceLevel: 'string',
      recommended: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

