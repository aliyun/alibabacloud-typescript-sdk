// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateUmodelRequestCommonSchemaRef } from "./CreateUmodelRequestCommonSchemaRef";


export class CreateUmodelRequest extends $dara.Model {
  commonSchemaRef?: CreateUmodelRequestCommonSchemaRef[];
  /**
   * @example
   * workspace test
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      commonSchemaRef: 'commonSchemaRef',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonSchemaRef: { 'type': 'array', 'itemType': CreateUmodelRequestCommonSchemaRef },
      description: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commonSchemaRef)) {
      $dara.Model.validateArray(this.commonSchemaRef);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

