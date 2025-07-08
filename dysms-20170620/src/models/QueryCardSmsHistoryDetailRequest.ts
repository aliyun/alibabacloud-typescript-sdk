// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsHistoryDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreate?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

