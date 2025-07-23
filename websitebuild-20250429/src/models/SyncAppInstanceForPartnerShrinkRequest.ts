// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncAppInstanceForPartnerShrinkRequest extends $dara.Model {
  appInstanceShrink?: string;
  /**
   * @example
   * CREATE
   */
  eventType?: string;
  /**
   * @example
   * system
   */
  operator?: string;
  /**
   * @example
   * 31104757
   */
  sourceBizId?: string;
  /**
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceShrink: 'AppInstance',
      eventType: 'EventType',
      operator: 'Operator',
      sourceBizId: 'SourceBizId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceShrink: 'string',
      eventType: 'string',
      operator: 'string',
      sourceBizId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

