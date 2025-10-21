// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabasesRequest extends $dara.Model {
  /**
   * @example
   * paimon-ods
   */
  databaseName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'databaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

