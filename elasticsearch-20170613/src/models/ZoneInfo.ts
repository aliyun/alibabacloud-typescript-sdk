// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ZoneInfo extends $dara.Model {
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * - ISOLATION: offline
   * - NORMAL: Normal.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The zone ID, which uniquely identifies the zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

