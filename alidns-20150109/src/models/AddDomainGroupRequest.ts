// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDomainGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the domain name group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

