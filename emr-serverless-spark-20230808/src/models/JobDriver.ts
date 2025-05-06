// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobDriverSparkSubmit } from "./JobDriverSparkSubmit";


export class JobDriver extends $dara.Model {
  sparkSubmit?: JobDriverSparkSubmit;
  static names(): { [key: string]: string } {
    return {
      sparkSubmit: 'sparkSubmit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sparkSubmit: JobDriverSparkSubmit,
    };
  }

  validate() {
    if(this.sparkSubmit && typeof (this.sparkSubmit as any).validate === 'function') {
      (this.sparkSubmit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

