// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The categories of the Flow.
   */
  categories?: string[];
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 333993838***
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the Flow.
   * 
   * @example
   * test1
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

