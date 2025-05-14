// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class KubeletConfigReservedMemory extends $dara.Model {
  limits?: { [key: string]: any };
  numaNode?: number;
  static names(): { [key: string]: string } {
    return {
      limits: 'limits',
      numaNode: 'numaNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limits: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      numaNode: 'number',
    };
  }

  validate() {
    if(this.limits) {
      $dara.Model.validateMap(this.limits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

