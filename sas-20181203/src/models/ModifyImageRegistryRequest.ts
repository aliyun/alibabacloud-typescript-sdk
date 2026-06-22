// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageRegistryRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * 114.55.xxx.xxx
   */
  domainName?: string;
  /**
   * @remarks
   * The image registry ID. Call the [ListImageRegistry](https://help.aliyun.com/document_detail/471986.html) operation to obtain this ID.
   * 
   * @example
   * 390103286
   */
  id?: number;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ********************
   */
  password?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The registry IP address.
   * 
   * @example
   * 192.168.0.1
   */
  registryHostIp?: string;
  /**
   * @remarks
   * The number of images to scan per hour.
   * 
   * @example
   * 10
   */
  transPerHour?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xxxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      id: 'Id',
      password: 'Password',
      port: 'Port',
      registryHostIp: 'RegistryHostIp',
      transPerHour: 'TransPerHour',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      id: 'number',
      password: 'string',
      port: 'number',
      registryHostIp: 'string',
      transPerHour: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

