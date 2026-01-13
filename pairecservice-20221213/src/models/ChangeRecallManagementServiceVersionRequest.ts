// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeRecallManagementServiceVersionRequest extends $dara.Model {
  instanceId?: string;
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

