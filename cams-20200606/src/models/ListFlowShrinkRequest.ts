// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 99948484
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The name of the Flow that you want to query. If FlowName is left empty, the information about all Flows is queried.
   * 
   * @example
   * flow_001
   */
  flowName?: string;
  /**
   * @remarks
   * The returned pages.
   */
  pageShrink?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowName: 'FlowName',
      pageShrink: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowName: 'string',
      pageShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

