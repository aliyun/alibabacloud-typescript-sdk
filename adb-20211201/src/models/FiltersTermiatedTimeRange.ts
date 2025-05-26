// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FiltersTermiatedTimeRange extends $dara.Model {
  maxTimeInMills?: number;
  minTimeInMills?: number;
  static names(): { [key: string]: string } {
    return {
      maxTimeInMills: 'MaxTimeInMills',
      minTimeInMills: 'MinTimeInMills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTimeInMills: 'number',
      minTimeInMills: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

