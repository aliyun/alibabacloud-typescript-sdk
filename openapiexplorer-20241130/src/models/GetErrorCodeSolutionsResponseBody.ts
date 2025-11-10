// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorCodeSolutionsResponseBodySolutions extends $dara.Model {
  /**
   * @remarks
   * The content of the solution, which is in the markdown format.
   */
  content?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0017-00000502
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The resource is not in a valid state for the operation.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The code of the product to which the solution belongs.
   * 
   * @example
   * Ecs
   */
  product?: string;
  /**
   * @remarks
   * The name of the product to which the solution belongs.
   */
  productName?: string;
  /**
   * @remarks
   * The solution ID.
   * 
   * @example
   * 0017-00000502
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      product: 'product',
      productName: 'productName',
      solutionId: 'solutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      product: 'string',
      productName: 'string',
      solutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorCodeSolutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A707AFA8-1A4C-5B2A-A165-8436C1EA38DB
   */
  requestId?: string;
  /**
   * @remarks
   * The solutions. Not all error codes have corresponding solutions. You can submit a ticket or use OpenAPI Explorer to contact technical support if necessary.
   */
  solutions?: GetErrorCodeSolutionsResponseBodySolutions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      solutions: 'solutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      solutions: { 'type': 'array', 'itemType': GetErrorCodeSolutionsResponseBodySolutions },
    };
  }

  validate() {
    if(Array.isArray(this.solutions)) {
      $dara.Model.validateArray(this.solutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

