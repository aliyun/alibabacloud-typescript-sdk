// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDentriesInfoResponseBodyDentryProperties extends $dara.Model {
  /**
   * @example
   * True
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      readOnly: 'ReadOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

