// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatisticsDetails extends $dara.Model {
  count?: number;
  idleNum?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      idleNum: 'IdleNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      idleNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

