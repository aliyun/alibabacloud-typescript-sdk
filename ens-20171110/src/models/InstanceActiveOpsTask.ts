// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceActiveOpsTask extends $dara.Model {
  instanceActiveOpsTaskId?: string;
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

