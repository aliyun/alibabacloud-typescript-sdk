// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaConnectFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The flow name.
   * 
   * This parameter is required.
   * 
   * @example
   * AliTestFlow
   */
  flowName?: string;
  /**
   * @remarks
   * The region in which the flow resides.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-1
   */
  flowRegion?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      flowRegion: 'FlowRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      flowRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

