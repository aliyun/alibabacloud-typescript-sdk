// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignNodeSpec extends $dara.Model {
  antiAffinityNodeNames?: string;
  enableAssignNode?: boolean;
  nodeNames?: string;
  static names(): { [key: string]: string } {
    return {
      antiAffinityNodeNames: 'AntiAffinityNodeNames',
      enableAssignNode: 'EnableAssignNode',
      nodeNames: 'NodeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiAffinityNodeNames: 'string',
      enableAssignNode: 'boolean',
      nodeNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

