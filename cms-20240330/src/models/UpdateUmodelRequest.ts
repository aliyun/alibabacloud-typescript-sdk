// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUmodelRequestCommonSchemaRef extends $dara.Model {
  /**
   * @example
   * test-bmp-123123
   */
  group?: string;
  items?: string[];
  /**
   * @example
   * 2.5.
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      items: 'items',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      items: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

