// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of turning on or off the main switch of the agent or the main switch status of the agent. Indicates whether the request was successful. Valid values:
   * 
   * *   success
   * *   failed
   * 
   * The main switch status of the agent. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * abc@def success\\nghi@jkl success\\n
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16AF921B-8187-489F-9913-43C808B4****
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
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

