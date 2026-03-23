// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConfigSetDetailResponseBodyDetailIpPool extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated IP pool.
   * 
   * @example
   * xxx
   */
  ipPoolId?: string;
  /**
   * @remarks
   * The name of the associated IP pool.
   * 
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
   * @remarks
   * The description.
   * 
   * @example
   * xxx
   */
  description?: string;
  /**
   * @remarks
   * The ID of the configuration set.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * The associated IP pool.
   */
  ipPool?: ConfigSetDetailResponseBodyDetailIpPool;
  /**
   * @remarks
   * The name of the configuration set.
   * 
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
  /**
   * @remarks
   * The details of the configuration set.
   */
  detail?: ConfigSetDetailResponseBodyDetail;
  /**
   * @remarks
   * The request ID.
   * 
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

