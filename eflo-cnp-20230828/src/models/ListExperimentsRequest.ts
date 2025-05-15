// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentsRequest extends $dara.Model {
  /**
   * @remarks
   * Order
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * Plan ID
   * 
   * @example
   * 189
   */
  planId?: number;
  /**
   * @remarks
   * 资源组id
   * 
   * @example
   * rg-uo8f26cpmo
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      planId: 'PlanId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'number',
      planId: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

