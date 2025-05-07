// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnResponseBodySecretBindDTO extends $dara.Model {
  /**
   * @remarks
   * The extension of the phone number.
   * 
   * >  The BindAxn operation does not involve an extension. Ignore this parameter.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * The private number, that is, phone number X.
   * 
   * @example
   * 139****0000
   */
  secretNo?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * 1***************3
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
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

