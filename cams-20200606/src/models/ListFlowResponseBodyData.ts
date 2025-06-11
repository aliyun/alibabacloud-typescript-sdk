// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The categories of the Flows.
   */
  categories?: string[];
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 3939393***
   */
  flowId?: string;
  /**
   * @remarks
   * The Flow name.
   * 
   * @example
   * flow-02020
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      flowId: 'string',
      flowName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

