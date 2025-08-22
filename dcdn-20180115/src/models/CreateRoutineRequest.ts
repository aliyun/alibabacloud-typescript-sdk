// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the routine.
   * 
   * @example
   * the description of this routine
   */
  description?: string;
  /**
   * @remarks
   * The configurations of the specified environment.
   * 
   * @example
   * {"staging":{"SpecName":"50ms"},"production":{"SpecName":"50ms"}}
   */
  envConf?: { [key: string]: any };
  /**
   * @remarks
   * The name of the routine. The name must be unique among the routines that belong to the same Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      envConf: 'EnvConf',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      envConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.envConf) {
      $dara.Model.validateMap(this.envConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

