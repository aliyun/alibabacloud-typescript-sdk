// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the check items.
   */
  checkIds?: number[];
  taskSource?: string;
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
      taskSource: 'TaskSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: { 'type': 'array', 'itemType': 'number' },
      taskSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

