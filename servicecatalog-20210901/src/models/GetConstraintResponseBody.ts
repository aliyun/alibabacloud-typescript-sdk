// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConstraintResponseBodyConstraintDetail extends $dara.Model {
  /**
   * @remarks
   * The configuration of the constraint.
   * 
   * Format: { "LocalRoleName": "\\<role_name>" }.
   * 
   * @example
   * { "LocalRoleName": "TestRole" }
   */
  config?: string;
  /**
   * @remarks
   * The ID of the constraint.
   * 
   * @example
   * cons-bp1yx7x42v****
   */
  constraintId?: string;
  /**
   * @remarks
   * The type of the constraint.
   * 
   * The value is fixed as Launch, which indicates the launch constraint.
   * 
   * @example
   * Launch
   */
  constraintType?: string;
  /**
   * @remarks
   * The time when the constraint was created.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-12T06:11:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the constraint.
   * 
   * @example
   * Launch as local role TestRole
   */
  description?: string;
  /**
   * @remarks
   * The ID of the product portfolio to which the constraint belongs.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The ID of the product for which the constraint is created.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * The name of the product.
   * 
   * @example
   * DEMO-Create an ECS instance.
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      constraintId: 'ConstraintId',
      constraintType: 'ConstraintType',
      createTime: 'CreateTime',
      description: 'Description',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      constraintId: 'string',
      constraintType: 'string',
      createTime: 'string',
      description: 'string',
      portfolioId: 'string',
      productId: 'string',
      productName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConstraintResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the constraint.
   */
  constraintDetail?: GetConstraintResponseBodyConstraintDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      constraintDetail: 'ConstraintDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintDetail: GetConstraintResponseBodyConstraintDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.constraintDetail && typeof (this.constraintDetail as any).validate === 'function') {
      (this.constraintDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

