// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMinorVersionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cc-uf6x229yeq166****
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: UpgradeMinorVersionResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE242962-6DA3-5FC8-9691-37B62A3210F7
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
      data: UpgradeMinorVersionResponseBodyData,
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

