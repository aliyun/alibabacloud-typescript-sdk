// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleJobParam extends $dara.Model {
  jobParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      jobParallelism: 'jobParallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobParallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

