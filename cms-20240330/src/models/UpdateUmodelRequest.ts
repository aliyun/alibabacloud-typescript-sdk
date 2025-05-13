// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUmodelRequestCommonSchemaRef } from "./UpdateUmodelRequestCommonSchemaRef";


export class UpdateUmodelRequest extends $dara.Model {
  commonSchemaRef?: UpdateUmodelRequestCommonSchemaRef[];
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
      commonSchemaRef: { 'type': 'array', 'itemType': UpdateUmodelRequestCommonSchemaRef },
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

