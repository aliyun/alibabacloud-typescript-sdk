// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizMetricByNameShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Query request.
   * 
   * This parameter is required.
   */
  bizMetricByNameQueryShrink?: string;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizMetricByNameQueryShrink: 'BizMetricByNameQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizMetricByNameQueryShrink: 'string',
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

