// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportTemplateByNameResponseBodyDefaultReceivers extends $dara.Model {
  userName?: string;
  /**
   * @example
   * 1234
   */
  userid?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      userid: 'Userid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      userid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

