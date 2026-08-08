// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckResourceCountRequestTagResourceMatchers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CreatedBy
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckResourceCountRequest extends $dara.Model {
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tagResourceMatchers?: PrecheckResourceCountRequestTagResourceMatchers[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagResourceMatchers: 'TagResourceMatchers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagResourceMatchers: { 'type': 'array', 'itemType': PrecheckResourceCountRequestTagResourceMatchers },
    };
  }

  validate() {
    if(Array.isArray(this.tagResourceMatchers)) {
      $dara.Model.validateArray(this.tagResourceMatchers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

