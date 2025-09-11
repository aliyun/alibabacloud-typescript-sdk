// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckIpExistsInSecurityIpListResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  ipExists?: boolean;
  static names(): { [key: string]: string } {
    return {
      ipExists: 'IpExists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipExists: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckIpExistsInSecurityIpListResponseBody extends $dara.Model {
  data?: CheckIpExistsInSecurityIpListResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
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
      data: CheckIpExistsInSecurityIpListResponseBodyData,
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

