// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StackInfo } from "./StackInfo";


export class StackDetailResult extends $dara.Model {
  stacks?: StackInfo[];
  static names(): { [key: string]: string } {
    return {
      stacks: 'stacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stacks: { 'type': 'array', 'itemType': StackInfo },
    };
  }

  validate() {
    if(Array.isArray(this.stacks)) {
      $dara.Model.validateArray(this.stacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

