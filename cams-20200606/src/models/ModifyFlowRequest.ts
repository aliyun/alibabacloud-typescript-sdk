// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the categories of the Flow.
   * 
   * This parameter is required.
   */
  categories?: string[];
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 9493884
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 2938838
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the Flow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      custSpaceId: 'string',
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

