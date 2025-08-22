// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExecuteStateResponseBody extends $dara.Model {
  /**
   * @example
   * Your account does not have enough balance to order postpaid product.
   */
  errorMessage?: string;
  /**
   * @example
   * {"tf-plan.run.log":"xxx"}
   */
  logFile?: { [key: string]: any };
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B4672AE3-C313-5B7A-BB24-45345570D398
   */
  requestId?: string;
  /**
   * @example
   * {"version": 4, "terraform_version": "1.5.7", "serial": 3, "lineage": "cb71b0b2-1ec2-6483-d409-8cae23186ec6",  "outputs": {}, "resources": [], "check_results": null}
   */
  state?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      logFile: 'logFile',
      requestId: 'requestId',
      state: 'state',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      logFile: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.logFile) {
      $dara.Model.validateMap(this.logFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

