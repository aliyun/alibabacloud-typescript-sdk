// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The list of check item IDs.
   */
  checkIds?: number[];
  /**
   * @remarks
   * The list of instance IDs of the assets associated with the check items.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The task source. Valid values:
   * 
   * - **YAO_CHI**: ApsaraDB console.
   * 
   * @example
   * YAO_CHI
   */
  taskSource?: string;
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
      instanceIds: 'InstanceIds',
      taskSource: 'TaskSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: { 'type': 'array', 'itemType': 'number' },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      taskSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

