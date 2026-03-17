// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the flow log.
   * 
   * @example
   * fl-7a56mar1kfw9vj****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 650CB9E8-20F3-4538-A4FC-1DA1B36E42D9
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the flow log belongs.
   * 
   * @example
   * rg-acfm2iu4f****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

