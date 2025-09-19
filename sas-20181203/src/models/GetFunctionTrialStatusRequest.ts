// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionTrialStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the function module.
   * 
   * @example
   * trail_file_detect_api_reward
   */
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

