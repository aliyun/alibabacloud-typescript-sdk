// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityAlertOfAllRuleScopeByWatchIdRequest extends $dara.Model {
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
   * 
   * @example
   * 11
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      watchId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

