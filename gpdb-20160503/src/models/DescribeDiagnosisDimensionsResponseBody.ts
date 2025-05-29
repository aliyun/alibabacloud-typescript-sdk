// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisDimensionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The names of the databases.
   */
  databases?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9ADCAACA-E0E8-5319-AE3B-E260E957BDF9
   */
  requestId?: string;
  /**
   * @remarks
   * The names of the database accounts.
   */
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    if(Array.isArray(this.userNames)) {
      $dara.Model.validateArray(this.userNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

