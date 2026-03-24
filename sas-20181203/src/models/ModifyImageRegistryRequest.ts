// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageRegistryRequest extends $dara.Model {
  domainName?: string;
  /**
   * @remarks
   * The ID of the image repository. You can call the listImageRegistry operation to query the ID of the image repository.
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
  port?: number;
  registryHostIp?: string;
  /**
   * @remarks
   * The number of images that are scanned per hour.
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

