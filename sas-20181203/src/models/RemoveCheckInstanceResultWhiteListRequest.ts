// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveCheckInstanceResultWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 11
   */
  checkId?: number;
  /**
   * @remarks
   * The IDs of instances. Separate multiple IDs with commas (,).
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

