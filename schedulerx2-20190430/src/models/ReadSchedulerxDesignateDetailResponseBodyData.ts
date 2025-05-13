// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVos } from "./ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVos";


export class ReadSchedulerxDesignateDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * -
   */
  designateDetailVos?: ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVos[];
  static names(): { [key: string]: string } {
    return {
      designateDetailVos: 'DesignateDetailVos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateDetailVos: { 'type': 'array', 'itemType': ReadSchedulerxDesignateDetailResponseBodyDataDesignateDetailVos },
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

