// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAdvisorResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

