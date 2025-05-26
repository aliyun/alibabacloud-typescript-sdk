// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class FiltersExecutionTimeRange extends $dara.Model {
  maxTimeInSeconds?: number;
  minTimeInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      maxTimeInSeconds: 'MaxTimeInSeconds',
      minTimeInSeconds: 'MinTimeInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTimeInSeconds: 'number',
      minTimeInSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

