// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The target number of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  instance?: number;
  /**
   * @remarks
   * A list of instance names to prioritize for removal during a scale-in operation.
   * 
   * **if can be null:**
   * true
   */
  instancesToDelete?: string[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      instancesToDelete: 'InstancesToDelete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'number',
      instancesToDelete: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instancesToDelete)) {
      $dara.Model.validateArray(this.instancesToDelete);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

