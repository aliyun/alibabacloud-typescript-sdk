// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * UTC+8
   */
  displayTimezone?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      displayTimezone: 'displayTimezone',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayTimezone: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

