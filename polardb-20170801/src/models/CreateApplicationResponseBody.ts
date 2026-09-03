// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationResponseBodyComponents extends $dara.Model {
  /**
   * @remarks
   * The child component ID.
   * 
   * @example
   * pac-********************
   */
  componentId?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-********************
   */
  applicationId?: string;
  /**
   * @remarks
   * The list of child components.
   */
  components?: CreateApplicationResponseBodyComponents[];
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * myapp
   */
  description?: string;
  /**
   * @remarks
   * The generated order ID.
   * 
   * @example
   * 2148126708*****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether resources are sufficient. This parameter is returned only when DryRun is set to true.
   * 
   * @example
   * true
   */
  resourceAvailable?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-********************
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      components: 'Components',
      description: 'Description',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceAvailable: 'ResourceAvailable',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      components: { 'type': 'array', 'itemType': CreateApplicationResponseBodyComponents },
      description: 'string',
      orderId: 'string',
      requestId: 'string',
      resourceAvailable: 'boolean',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

