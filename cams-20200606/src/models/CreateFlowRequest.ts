// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The categories of the Flow.
   * 
   * This parameter is required.
   */
  categories?: string[];
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 93994848
   */
  custSpaceId?: string;
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
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      custSpaceId: 'string',
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

