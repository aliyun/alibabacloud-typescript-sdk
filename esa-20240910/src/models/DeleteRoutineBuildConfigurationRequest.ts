// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoutineBuildConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ER name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-routine
   */
  routineName?: string;
  static names(): { [key: string]: string } {
    return {
      routineName: 'RoutineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

