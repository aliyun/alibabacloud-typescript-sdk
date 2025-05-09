// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TryRunTaskFlowRequest extends $dara.Model {
  /**
   * @example
   * 11****
   */
  dagId?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

