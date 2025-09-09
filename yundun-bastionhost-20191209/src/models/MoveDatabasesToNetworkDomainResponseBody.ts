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

export class MoveDatabasesToNetworkDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E5B1BC32-72B2-5BFD-BF75-5D38261264D1
   */
  requestId?: string;
  /**
   * @remarks
   * The results of the call.
   */
  results?: MoveDatabasesToNetworkDomainResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': MoveDatabasesToNetworkDomainResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

