// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaJob extends $dara.Model {
  queuing?: number;
  running?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      queuing: 'Queuing',
      running: 'Running',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queuing: 'number',
      running: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

