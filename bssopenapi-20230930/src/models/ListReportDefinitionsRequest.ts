// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportDefinitionsRequest extends $dara.Model {
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nbid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

