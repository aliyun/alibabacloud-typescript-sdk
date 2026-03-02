// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpConfig extends $dara.Model {
  /**
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @example
   * 1
   */
  askId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {key:value}
   */
  context?: string;
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * 2022-2-22 11:11:2
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-2-22 11:11:2
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * neuron-developer-spring-config
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pbcId?: number;
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceGroupId?: number;
  /**
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SERVICE_SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      askId: 'askId',
      context: 'context',
      enterpriseId: 'enterpriseId',
      env: 'env',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      name: 'name',
      pbcId: 'pbcId',
      requestId: 'requestId',
      serviceGroupId: 'serviceGroupId',
      serviceId: 'serviceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      askId: 'string',
      context: 'string',
      enterpriseId: 'number',
      env: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      pbcId: 'number',
      requestId: 'string',
      serviceGroupId: 'number',
      serviceId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

