// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateListByUserIdResponseBodyTemplateList extends $dara.Model {
  iconUrl?: string;
  name?: string;
  /**
   * @example
   * 11111
   */
  reportCode?: string;
  /**
   * @example
   * https://scsss/sss
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      iconUrl: 'IconUrl',
      name: 'Name',
      reportCode: 'ReportCode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iconUrl: 'string',
      name: 'string',
      reportCode: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

