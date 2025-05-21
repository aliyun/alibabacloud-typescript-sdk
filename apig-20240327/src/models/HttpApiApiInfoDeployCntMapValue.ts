// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiApiInfoDeployCntMapValue extends $dara.Model {
  deployedCnt?: number;
  cnt?: number;
  static names(): { [key: string]: string } {
    return {
      deployedCnt: 'deployedCnt',
      cnt: 'Cnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedCnt: 'number',
      cnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

