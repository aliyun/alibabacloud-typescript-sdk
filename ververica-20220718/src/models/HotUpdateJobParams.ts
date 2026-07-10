// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RescaleJobParam } from "./RescaleJobParam";
import { UpdateJobConfigParam } from "./UpdateJobConfigParam";


export class HotUpdateJobParams extends $dara.Model {
  rescaleJobParam?: RescaleJobParam;
  updateJobConfigParam?: UpdateJobConfigParam;
  static names(): { [key: string]: string } {
    return {
      rescaleJobParam: 'rescaleJobParam',
      updateJobConfigParam: 'updateJobConfigParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rescaleJobParam: RescaleJobParam,
      updateJobConfigParam: UpdateJobConfigParam,
    };
  }

  validate() {
    if(this.rescaleJobParam && typeof (this.rescaleJobParam as any).validate === 'function') {
      (this.rescaleJobParam as any).validate();
    }
    if(this.updateJobConfigParam && typeof (this.updateJobConfigParam as any).validate === 'function') {
      (this.updateJobConfigParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

