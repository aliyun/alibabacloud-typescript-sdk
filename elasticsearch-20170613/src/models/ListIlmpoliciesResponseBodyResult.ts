// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListILMPoliciesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * policy-1
   */
  name?: string;
  /**
   * @example
   * {"hot":{"minAge":"0ms","actions":{"rollover":{"maxSize":"50gb","maxAge":"30d"},"setPriority":{"priority":100}}},"delete":{"minAge":"3d","actions":{"delete":{}}}}
   */
  phases?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      phases: 'phases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      phases: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.phases) {
      $dara.Model.validateMap(this.phases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

