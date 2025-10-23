// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConfigSetDetailResponseBodyDetailIpPool extends $dara.Model {
  /**
   * @example
   * xxx
   */
  ipPoolId?: string;
  /**
   * @example
   * xxx
   */
  ipPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      ipPoolId: 'IpPoolId',
      ipPoolName: 'IpPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPoolId: 'string',
      ipPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSetDetailResponseBodyDetail extends $dara.Model {
  /**
   * @example
   * xxx
   */
  description?: string;
  /**
   * @example
   * xxx
   */
  id?: string;
  ipPool?: ConfigSetDetailResponseBodyDetailIpPool;
  /**
   * @example
   * xxx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      ipPool: 'IpPool',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      ipPool: ConfigSetDetailResponseBodyDetailIpPool,
      name: 'string',
    };
  }

  validate() {
    if(this.ipPool && typeof (this.ipPool as any).validate === 'function') {
      (this.ipPool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSetDetailResponseBody extends $dara.Model {
  detail?: ConfigSetDetailResponseBodyDetail;
  /**
   * @example
   * xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: ConfigSetDetailResponseBodyDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

