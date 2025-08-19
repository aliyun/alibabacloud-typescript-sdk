// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResidentConfig extends $dara.Model {
  count?: number;
  poolId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      poolId: 'poolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      poolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

