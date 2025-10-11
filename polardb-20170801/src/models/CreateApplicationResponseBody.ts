// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationResponseBodyComponents extends $dara.Model {
  /**
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
   * @example
   * pa-********************
   */
  applicationId?: string;
  components?: CreateApplicationResponseBodyComponents[];
  /**
   * @example
   * myapp
   */
  description?: string;
  /**
   * @example
   * 2148126708*****
   */
  orderId?: string;
  /**
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  resourceAvailable?: boolean;
  /**
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

