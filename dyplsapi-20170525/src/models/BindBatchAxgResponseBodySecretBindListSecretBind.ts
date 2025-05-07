// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindBatchAxgResponseBodySecretBindListSecretBind extends $dara.Model {
  /**
   * @example
   * isv.INVALID_PARAMETERS
   */
  code?: string;
  /**
   * @example
   * 257
   */
  extension?: string;
  /**
   * @example
   * 1234
   */
  groupId?: string;
  /**
   * @example
   * ringConfig invalid
   */
  message?: string;
  /**
   * @example
   * 13333333333
   */
  phoneNoA?: string;
  /**
   * @example
   * 13333333333
   */
  secretNo?: string;
  /**
   * @example
   * 1000085060515673
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extension: 'Extension',
      groupId: 'GroupId',
      message: 'Message',
      phoneNoA: 'PhoneNoA',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extension: 'string',
      groupId: 'string',
      message: 'string',
      phoneNoA: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

