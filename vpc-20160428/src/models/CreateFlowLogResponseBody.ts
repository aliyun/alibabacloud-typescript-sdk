// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the flow log.
   * 
   * @example
   * fl-m5e8vhz2t21sel1nq****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B457
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazdjdhd****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

