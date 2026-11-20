// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The target instance count for scaling.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  instance?: number;
  /**
   * @remarks
   * The list of instance names to prioritize for deletion during a scale-in operation. Note: This parameter takes effect only during scale-in.
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

