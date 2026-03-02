// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpHistoryConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * 1
   */
  configId?: number;
  /**
   * @example
   * {key:value}
   */
  context?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * neuron-developer-spring-config
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pbcId?: number;
  requestId?: string;
  serviceGroupId?: number;
  /**
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @example
   * SERVICE_SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      askId: 'askId',
      configId: 'configId',
      context: 'context',
      enterpriseId: 'enterpriseId',
      env: 'env',
      gmtCreate: 'gmtCreate',
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
      configId: 'number',
      context: 'string',
      enterpriseId: 'number',
      env: 'string',
      gmtCreate: 'string',
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

