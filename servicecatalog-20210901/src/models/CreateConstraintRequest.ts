// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConstraintRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the constraint.
   * 
   * Format: { "LocalRoleName": "\\<role_name>" }.
   * 
   * This parameter is required.
   * 
   * @example
   * { "LocalRoleName": "TestRole" }
   */
  config?: string;
  /**
   * @remarks
   * The type of the constraint.
   * 
   * The value is fixed as Launch, which specifies the launch constraint.
   * 
   * This parameter is required.
   * 
   * @example
   * Launch
   */
  constraintType?: string;
  /**
   * @remarks
   * The description of the constraint.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * @example
   * Launch as local role TestRole
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The ID of the product portfolio to which the constraint belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The ID of the product for which the constraint is created.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      constraintType: 'ConstraintType',
      description: 'Description',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      constraintType: 'string',
      description: 'string',
      portfolioId: 'string',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

