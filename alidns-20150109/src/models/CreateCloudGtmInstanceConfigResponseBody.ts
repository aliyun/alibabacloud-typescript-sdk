// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmInstanceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name instance configuration. A GTM instance can have both an A record and an AAAA record for the same access domain name. In this case, the GTM instance has two domain name instance configurations. The ConfigId uniquely identifies each configuration.
   * 
   * @example
   * config-000**1
   */
  configId?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gtm-cn-xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'boolean',
      instanceId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

