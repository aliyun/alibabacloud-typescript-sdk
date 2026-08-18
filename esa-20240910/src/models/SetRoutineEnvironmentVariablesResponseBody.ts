// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRoutineEnvironmentVariablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The list of environment variable keys that were set successfully.
   * 
   * @example
   * ["key1","key2"]
   */
  setKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      setKeys: 'SetKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      setKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.setKeys)) {
      $dara.Model.validateArray(this.setKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

