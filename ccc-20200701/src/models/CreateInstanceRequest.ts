// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["24861380681070****","105980354482****"]
   */
  adminRamIdList?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
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

