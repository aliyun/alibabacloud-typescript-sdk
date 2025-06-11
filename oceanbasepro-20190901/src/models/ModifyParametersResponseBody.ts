// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyParametersResponseBodyResults } from "./ModifyParametersResponseBodyResults";


export class ModifyParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **ModifyParameters**.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * Example 1
   */
  results?: ModifyParametersResponseBodyResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: ModifyParametersResponseBodyResults,
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

