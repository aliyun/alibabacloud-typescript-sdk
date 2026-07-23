// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineBuildConfigurationsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of ER routine names, separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * rwa-test,demo
   */
  routineNames?: string;
  static names(): { [key: string]: string } {
    return {
      routineNames: 'RoutineNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routineNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

