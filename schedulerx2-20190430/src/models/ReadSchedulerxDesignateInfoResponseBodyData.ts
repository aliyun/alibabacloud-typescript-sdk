// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVos } from "./ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVos";


export class ReadSchedulerxDesignateInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * -
   */
  designateDetailVos?: ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVos[];
  /**
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @example
   * true
   */
  transferable?: boolean;
  static names(): { [key: string]: string } {
    return {
      designateDetailVos: 'DesignateDetailVos',
      designateType: 'DesignateType',
      transferable: 'Transferable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateDetailVos: { 'type': 'array', 'itemType': ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVos },
      designateType: 'number',
      transferable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.designateDetailVos)) {
      $dara.Model.validateArray(this.designateDetailVos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

