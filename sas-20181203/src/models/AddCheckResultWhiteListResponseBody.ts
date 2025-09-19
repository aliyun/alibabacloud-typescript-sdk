// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCheckResultWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned. This parameter is deprecated.
   * 
   * @example
   * 1
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C699E4E4-F2F4-58FC-A949-457FFE59****
   */
  requestId?: string;
  /**
   * @remarks
   * The IDs of the whitelist rules that are generated.
   */
  ruleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

