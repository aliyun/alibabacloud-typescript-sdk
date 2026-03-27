// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUmodelCommonSchemaRefResponseBodyCommonSchemaRef extends $dara.Model {
  /**
   * @example
   * apm-common
   */
  group?: string;
  /**
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

