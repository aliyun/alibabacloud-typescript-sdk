// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveDatabasesToNetworkDomainResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the database is added to the network domain.
   * 
   * > The code LICENSE_OUT_OF_LIMIT indicates that the network domain feature is not supported by the current Bastionhost edition.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 45
   */
  databaseId?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * N/A
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseId: 'DatabaseId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

