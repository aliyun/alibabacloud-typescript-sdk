// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageEventOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The primary key of the alert handling rule.
   * 
   * @example
   * 1404656
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

