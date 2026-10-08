// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveRCInstancesFromDeploymentSetResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-w9htiydssds
   */
  RCInstanceId?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * * **Success**: Succeeded.
   * * **Failed**: Failed.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      RCInstanceId: 'RCInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RCInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveRCInstancesFromDeploymentSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C816A4BF-A6EC-4722-95F9-2055859CCFD2
   */
  requestId?: string;
  /**
   * @remarks
   * The call results of the operation.
   */
  results?: RemoveRCInstancesFromDeploymentSetResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': RemoveRCInstancesFromDeploymentSetResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

