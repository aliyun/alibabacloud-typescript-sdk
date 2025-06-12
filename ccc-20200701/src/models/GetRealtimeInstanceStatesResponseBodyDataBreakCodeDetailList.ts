// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeInstanceStatesResponseBodyDataBreakCodeDetailList extends $dara.Model {
  breakCode?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

