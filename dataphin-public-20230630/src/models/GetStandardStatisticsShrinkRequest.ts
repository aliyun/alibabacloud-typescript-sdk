// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardStatisticsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  statisticsQueryShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      statisticsQueryShrink: 'StatisticsQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      statisticsQueryShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

