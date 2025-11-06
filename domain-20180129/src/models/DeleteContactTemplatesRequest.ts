// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  registrantProfileIds?: string;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      registrantProfileIds: 'RegistrantProfileIds',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfileIds: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

