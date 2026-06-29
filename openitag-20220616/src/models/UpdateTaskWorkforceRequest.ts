// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleWorkforce } from "./SimpleWorkforce";


export class UpdateTaskWorkforceRequest extends $dara.Model {
  /**
   * @remarks
   * User List.
   */
  workforce?: SimpleWorkforce[];
  static names(): { [key: string]: string } {
    return {
      workforce: 'Workforce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workforce: { 'type': 'array', 'itemType': SimpleWorkforce },
    };
  }

  validate() {
    if(Array.isArray(this.workforce)) {
      $dara.Model.validateArray(this.workforce);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

