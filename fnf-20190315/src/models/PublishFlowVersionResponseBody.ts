// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishFlowVersionResponseBody extends $dara.Model {
  /**
   * @example
   * 2025-10-24T14:11:26+08:00
   */
  createdTime?: string;
  /**
   * @example
   * my flow description
   */
  description?: string;
  /**
   * @example
   * my-flow-name
   */
  flowName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 294D68C1-5108-5971-853A-1A9CC87B4816
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      flowName: 'FlowName',
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      flowName: 'string',
      requestId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

