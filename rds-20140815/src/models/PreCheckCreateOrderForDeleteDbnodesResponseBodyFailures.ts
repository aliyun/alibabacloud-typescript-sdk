// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures } from "./PreCheckCreateOrderForDeleteDbnodesResponseBodyFailuresFailures";


export class PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures extends $dara.Model {
  failures?: PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures[];
  static names(): { [key: string]: string } {
    return {
      failures: 'Failures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failures: { 'type': 'array', 'itemType': PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures },
    };
  }

  validate() {
    if(Array.isArray(this.failures)) {
      $dara.Model.validateArray(this.failures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

