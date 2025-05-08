// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteDeliveryTaskRequestKafkaDelivery extends $dara.Model {
  /**
   * @remarks
   * The load balancing method.
   * 
   * @example
   * kafka.LeastBytes
   */
  balancer?: string;
  /**
   * @remarks
   * The brokers.
   */
  brokers?: string[];
  /**
   * @remarks
   * The compression method.
   * 
   * @example
   * gzip
   */
  compress?: string;
  /**
   * @remarks
   * The encryption method.
   * 
   * @example
   * plain
   */
  machanismType?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The topic.
   * 
   * @example
   * dqc_test2
   */
  topic?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication.
   * 
   * @example
   * true
   */
  userAuth?: boolean;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      balancer: 'Balancer',
      brokers: 'Brokers',
      compress: 'Compress',
      machanismType: 'MachanismType',
      password: 'Password',
      topic: 'Topic',
      userAuth: 'UserAuth',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balancer: 'string',
      brokers: { 'type': 'array', 'itemType': 'string' },
      compress: 'string',
      machanismType: 'string',
      password: 'string',
      topic: 'string',
      userAuth: 'boolean',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.brokers)) {
      $dara.Model.validateArray(this.brokers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

