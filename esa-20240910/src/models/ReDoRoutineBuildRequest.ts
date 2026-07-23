// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReDoRoutineBuildRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ER build task.
   * 
   * This parameter is required.
   * 
   * @example
   * 156773519472872
   */
  routineBuildId?: number;
  static names(): { [key: string]: string } {
    return {
      routineBuildId: 'RoutineBuildId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routineBuildId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

