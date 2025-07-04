// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlInstanceRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

