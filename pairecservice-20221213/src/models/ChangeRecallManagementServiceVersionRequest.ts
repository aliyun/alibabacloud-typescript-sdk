// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeRecallManagementServiceVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * The recall management service version ID.
   * 
   * @example
   * 1
   */
  recallManagementServiceVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      recallManagementServiceVersionId: 'RecallManagementServiceVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      recallManagementServiceVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

