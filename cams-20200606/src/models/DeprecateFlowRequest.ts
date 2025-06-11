// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeprecateFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 38877483
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

