// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeILMPolicyResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ilm-history-ilm-policy
   */
  name?: string;
  /**
   * @example
   * {"cold":{"minAge":"30d","actions":{"allocate":{"numberOfReplicas":1,"require":{"boxType":"warm"}},"setPriority":{"priority":100}}},"hot":{"minAge":"0s","actions":{"rollover":{"maxAge":"30d","maxDocs":10000,"maxSize":"50gb"},"setPriority":{"priority":1000}}},"delete":{"minAge":"30d","actions":{"delete":{}}}}
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

