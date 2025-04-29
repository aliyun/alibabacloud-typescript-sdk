// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployApiTaskResponseBodyDeployedResults } from "./DescribeDeployApiTaskResponseBodyDeployedResults";


export class DescribeDeployApiTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  deployedResults?: DescribeDeployApiTaskResponseBodyDeployedResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CA4B3261-F14A-5E33-8608-F75A1DF27AD4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deployedResults: 'DeployedResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedResults: DescribeDeployApiTaskResponseBodyDeployedResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deployedResults && typeof (this.deployedResults as any).validate === 'function') {
      (this.deployedResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

