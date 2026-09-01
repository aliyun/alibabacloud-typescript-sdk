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
   * Specifies whether to forcibly run the specified check items. Default value: false.
   * 
   * - true: Forcibly runs the specified check items. Forced execution bypasses frequency and quantity limits and initiates the check directly, which may cause duplicate checks to run multiple times within a short period.
   * - false (default): Does not forcibly run the specified check items. This ensures that the same check item is executed only once within a short period.
   */
  force?: boolean;
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
      force: 'Force',
      instanceIds: 'InstanceIds',
      taskSource: 'TaskSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: { 'type': 'array', 'itemType': 'number' },
      force: 'boolean',
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

