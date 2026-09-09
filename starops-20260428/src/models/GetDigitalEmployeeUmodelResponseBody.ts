// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDigitalEmployeeUmodelResponseBodyCommonSchemaRef extends $dara.Model {
  /**
   * @remarks
   * The schema group.
   * 
   * @example
   * default
   */
  group?: string;
  /**
   * @remarks
   * The schema version.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDigitalEmployeeUmodelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The common schemas referenced by the digital employee UModel.
   */
  commonSchemaRef?: GetDigitalEmployeeUmodelResponseBodyCommonSchemaRef[];
  /**
   * @remarks
   * The description of the digital employee UModel.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The name of the digital employee to which the UModel belongs.
   * 
   * @example
   * sample-agent
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-1234567890AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commonSchemaRef: 'commonSchemaRef',
      description: 'description',
      name: 'name',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonSchemaRef: { 'type': 'array', 'itemType': GetDigitalEmployeeUmodelResponseBodyCommonSchemaRef },
      description: 'string',
      name: 'string',
      requestId: 'string',
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

