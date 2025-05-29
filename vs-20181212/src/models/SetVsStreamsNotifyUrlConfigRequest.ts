// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVsStreamsNotifyUrlConfigRequest extends $dara.Model {
  /**
   * @example
   * ocs*****ace
   */
  authKey?: string;
  /**
   * @example
   * type_a
   */
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxx.com/xx
   */
  notifyUrl?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authType: 'AuthType',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authType: 'string',
      domainName: 'string',
      notifyUrl: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

