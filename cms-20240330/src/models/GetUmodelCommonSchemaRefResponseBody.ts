// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUmodelCommonSchemaRefResponseBodyCommonSchemaRef extends $dara.Model {
  /**
   * @remarks
   * The common Umodel Schema group.
   * 
   * @example
   * apm-common
   */
  group?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 0.1.0
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

export class GetUmodelCommonSchemaRefResponseBody extends $dara.Model {
  /**
   * @remarks
   * The referenced common Umodel Schema.
   */
  commonSchemaRef?: GetUmodelCommonSchemaRefResponseBodyCommonSchemaRef[];
  static names(): { [key: string]: string } {
    return {
      commonSchemaRef: 'commonSchemaRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonSchemaRef: { 'type': 'array', 'itemType': GetUmodelCommonSchemaRefResponseBodyCommonSchemaRef },
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

