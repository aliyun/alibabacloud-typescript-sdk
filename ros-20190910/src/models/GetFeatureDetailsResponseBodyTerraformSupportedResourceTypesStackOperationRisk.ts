// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureDetailsResponseBodyTerraformSupportedResourceTypesStackOperationRisk extends $dara.Model {
  /**
   * @remarks
   * The resource types that support the risk check performed to detect risks caused by a stack deletion operation.
   */
  deleteStack?: string[];
  static names(): { [key: string]: string } {
    return {
      deleteStack: 'DeleteStack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteStack: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deleteStack)) {
      $dara.Model.validateArray(this.deleteStack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

