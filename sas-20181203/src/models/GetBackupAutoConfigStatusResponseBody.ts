// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBackupAutoConfigStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the anti-ransomware policy for servers can be automatically configured by the managed anti-ransomware feature. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  canConfigAuto?: boolean;
  static names(): { [key: string]: string } {
    return {
      canConfigAuto: 'CanConfigAuto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canConfigAuto: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupAutoConfigStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetBackupAutoConfigStatusResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 898F7AA7-CECD-5EC7-AF4D-664C601B****
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
      data: GetBackupAutoConfigStatusResponseBodyData,
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

