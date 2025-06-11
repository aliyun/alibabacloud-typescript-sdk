// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the categories of the Flow.
   * 
   * This parameter is required.
   */
  categoriesShrink?: string;
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
      categoriesShrink: 'Categories',
      custSpaceId: 'CustSpaceId',
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoriesShrink: 'string',
      custSpaceId: 'string',
      flowId: 'string',
      flowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

