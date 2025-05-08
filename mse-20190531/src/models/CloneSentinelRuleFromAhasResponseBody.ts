// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneSentinelRuleFromAhasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: { [key: string]: string[] };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE5C32A1-BC0E-4B79-817C-103E4EDF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

