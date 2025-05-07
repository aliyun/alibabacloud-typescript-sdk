// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEdsAgentReportConfigResponseBodyData extends $dara.Model {
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

