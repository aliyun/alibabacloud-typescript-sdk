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

export class DescribeILMPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * FF44681E-FD41-4FDE-B8DF-295DCDD6****
   */
  requestId?: string;
  result?: DescribeILMPolicyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeILMPolicyResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

