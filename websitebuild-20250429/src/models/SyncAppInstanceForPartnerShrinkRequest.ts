// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncAppInstanceForPartnerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application instance object data
   */
  appInstanceShrink?: string;
  /**
   * @remarks
   * Type of system event. CREATE, UPDATE, COMPLETE
   * 
   * @example
   * CREATE
   */
  eventType?: string;
  /**
   * @remarks
   * Operator ID
   * 
   * @example
   * system
   */
  operator?: string;
  /**
   * @remarks
   * Source business ID.
   * 
   * @example
   * 31104757
   */
  sourceBizId?: string;
  /**
   * @remarks
   * Source: MARKET_CLOUD_DREAM
   * 
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

