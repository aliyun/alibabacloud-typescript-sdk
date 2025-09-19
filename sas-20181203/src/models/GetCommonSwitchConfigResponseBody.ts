// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommonSwitchConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to turn on the switch for newly added servers. Valid values:
   * 
   * *   **add**: By default, the switch is turned on for newly added servers.
   * *   **del**: By default, the switch is turned off for newly added servers.
   * 
   * @example
   * add
   */
  targetDefault?: string;
  /**
   * @remarks
   * The status of the synchronization. Valid values:
   * 
   * *   **sync**: The modifications are being synchronized.
   * *   **valid**: The modifications has taken effect.
   * 
   * @example
   * valid
   */
  targetSyncStatus?: string;
  static names(): { [key: string]: string } {
    return {
      targetDefault: 'TargetDefault',
      targetSyncStatus: 'TargetSyncStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetDefault: 'string',
      targetSyncStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonSwitchConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetCommonSwitchConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCommonSwitchConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

