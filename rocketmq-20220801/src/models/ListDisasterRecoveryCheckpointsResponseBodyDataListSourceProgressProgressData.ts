// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData extends $dara.Model {
  /**
   * @remarks
   * Latest consumption time
   * 
   * @example
   * 1740724080343
   */
  consumeTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTimestamp: 'consumeTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

