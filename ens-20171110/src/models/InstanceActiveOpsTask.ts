// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceActiveOpsTask extends $dara.Model {
  /**
   * @remarks
   * instance active ops task id
   */
  instanceActiveOpsTaskId?: string;
  /**
   * @remarks
   * the status of instance active ops task
   */
  instanceActiveOpsTaskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceActiveOpsTaskId: 'InstanceActiveOpsTaskId',
      instanceActiveOpsTaskStatus: 'InstanceActiveOpsTaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceActiveOpsTaskId: 'string',
      instanceActiveOpsTaskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

