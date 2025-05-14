// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineAgentDetailReportResponseBodyDataColumns extends $dara.Model {
  /**
   * @example
   * realName
   */
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

