// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncAppInstanceForPartnerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The website instance object data.
   */
  appInstanceShrink?: string;
  /**
   * @remarks
   * The type of the system event. Valid values: CREATE, UPDATE, and COMPLETE.
   * 
   * @example
   * CREATE
   */
  eventType?: string;
  /**
   * @remarks
   * The employee ID of the operator.
   * 
   * @example
   * system
   */
  operator?: string;
  /**
   * @remarks
   * The source business ID.
   * 
   * @example
   * 31104757
   */
  sourceBizId?: string;
  /**
   * @remarks
   * The source. Set this parameter to MARKET_CLOUD_DREAM.
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

