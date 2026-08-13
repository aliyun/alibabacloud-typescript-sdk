// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataZoneSupportCompactionServiceValue extends $dara.Model {
  /**
   * @remarks
   * The availability zone ID.
   */
  zoneId?: string;
  /**
   * @remarks
   * The resource level.
   */
  resourceLevel?: string;
  /**
   * @remarks
   * Indicates whether this is the recommended option.
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

