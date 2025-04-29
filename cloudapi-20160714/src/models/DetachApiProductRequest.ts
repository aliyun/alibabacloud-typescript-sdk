// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachApiProductRequestApis } from "./DetachApiProductRequestApis";


export class DetachApiProductRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API product.
   * 
   * This parameter is required.
   * 
   * @example
   * 117b7a64a8b3f064eaa4a47ac62aac5e
   */
  apiProductId?: string;
  /**
   * @remarks
   * The APIs that you want to detach from the API product.
   * 
   * This parameter is required.
   */
  apis?: DetachApiProductRequestApis[];
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiProductId: 'ApiProductId',
      apis: 'Apis',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductId: 'string',
      apis: { 'type': 'array', 'itemType': DetachApiProductRequestApis },
      securityToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apis)) {
      $dara.Model.validateArray(this.apis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

