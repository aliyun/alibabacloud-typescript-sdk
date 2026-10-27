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
   * Specifies whether to forcibly execute the specified check item. Default value: false.
   * 
   * - true: Forcibly executes the specified check item. Forcible execution bypasses frequency and quantity limits and directly initiates the check, which may result in repeated executions within a short period.
   * - false (default): Does not forcibly execute the specified check item. This ensures that the same check item is executed only once within a short period.
   */
  force?: boolean;
  /**
   * @remarks
   * The list of instance IDs for the check item assets.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The source of the task. Valid values:
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

