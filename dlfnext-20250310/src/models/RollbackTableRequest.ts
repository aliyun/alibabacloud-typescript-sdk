// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FullInstant } from "./FullInstant";


export class RollbackTableRequest extends $dara.Model {
  instant?: FullInstant;
  static names(): { [key: string]: string } {
    return {
      instant: 'instant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instant: FullInstant,
    };
  }

  validate() {
    if(this.instant && typeof (this.instant as any).validate === 'function') {
      (this.instant as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

