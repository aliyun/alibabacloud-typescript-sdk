// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCheckInstanceResultWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned. This parameter is deprecated.
   * 
   * @example
   * xxx
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADE57832-9666-511C-9A80-B87DE2E8****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the whitelist rule.
   * 
   * @example
   * 381049
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      ruleId: 'string',
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

