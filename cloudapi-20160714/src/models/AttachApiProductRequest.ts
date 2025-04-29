// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachApiProductRequestApis } from "./AttachApiProductRequestApis";


export class AttachApiProductRequest extends $dara.Model {
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
   * The APIs to be attached.
   * 
   * This parameter is required.
   */
  apis?: AttachApiProductRequestApis[];
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
      apis: { 'type': 'array', 'itemType': AttachApiProductRequestApis },
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

