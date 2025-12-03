// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckInstanceResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > You can call the [ListCheckResult](~~ListCheckResult~~) operation to query the IDs of check items.
   * 
   * @example
   * 16
   */
  checkId?: number;
  /**
   * @remarks
   * List of item IDs to be checked.
   */
  checkIds?: number[];
  /**
   * @remarks
   * The instance IDs of the assets on which risks are detected based on the check item.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The source of task.
   * 
   * @example
   * YAO_CHI
   */
  taskSource?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkIds: 'CheckIds',
      instanceIds: 'InstanceIds',
      taskSource: 'TaskSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
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

