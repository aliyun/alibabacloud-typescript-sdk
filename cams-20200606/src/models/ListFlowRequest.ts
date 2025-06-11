// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFlowRequestPage } from "./ListFlowRequestPage";


export class ListFlowRequest extends $dara.Model {
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
  page?: ListFlowRequestPage;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      flowName: 'FlowName',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      flowName: 'string',
      page: ListFlowRequestPage,
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

