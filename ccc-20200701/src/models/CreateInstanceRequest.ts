// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * List of RAM IDs to be assigned as administrators of this Cloud Contact Center instance. After successful creation, the RAM IDs in this list will be automatically imported into the newly created instance with administrator privileges.
   * 
   * This parameter is required.
   * 
   * @example
   * ["24861380681070****","105980354482****"]
   */
  adminRamIdList?: string;
  /**
   * @remarks
   * Description of the instance. The length must not exceed 256 characters.
   * 
   * @example
   * 云联络中心的测试实例。
   */
  description?: string;
  /**
   * @remarks
   * Second-level domain name of the Cloud Contact Center instance, which serves as the instance ID and is globally unique. It must be 4 to 48 characters long and can only contain uppercase and lowercase English letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  domainName?: string;
  /**
   * @remarks
   * Instance name. The length must be between 4 and 32 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试实例
   */
  name?: string;
  /**
   * @remarks
   * List of phone numbers for the Cloud Contact Center instance to be created. The current account must have usage rights to these numbers, and the numbers must not be associated with any other instance.
   * 
   * @example
   * ["0830011xxxx", "0830312xxxx"]
   */
  numberList?: string;
  static names(): { [key: string]: string } {
    return {
      adminRamIdList: 'AdminRamIdList',
      description: 'Description',
      domainName: 'DomainName',
      name: 'Name',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminRamIdList: 'string',
      description: 'string',
      domainName: 'string',
      name: 'string',
      numberList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

