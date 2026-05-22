// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafQuotaRequest extends $dara.Model {
  /**
   * @example
   * page
   */
  paths?: string;
  static names(): { [key: string]: string } {
    return {
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paths: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

