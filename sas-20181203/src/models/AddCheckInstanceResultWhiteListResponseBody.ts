// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCheckInstanceResultWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The result of adding instances to the whitelist. This field is deprecated and can be ignored.
   * 
   * @example
   * xxx
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generated for the request.
   * 
   * @example
   * ADE57832-9666-511C-9A80-B87DE2E8****
   */
  requestId?: string;
  /**
   * @remarks
   * The rule ID of the whitelist.
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

