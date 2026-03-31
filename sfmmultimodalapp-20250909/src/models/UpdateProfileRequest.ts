// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProfileRequestAttributesOperations extends $dara.Model {
  /**
   * @example
   * 48944
   */
  attributeId?: string;
  /**
   * @example
   * 18
   */
  defaultValue?: string;
  description?: string;
  name?: string;
  /**
   * @example
   * add
   */
  op?: string;
  static names(): { [key: string]: string } {
    return {
      attributeId: 'AttributeId',
      defaultValue: 'DefaultValue',
      description: 'Description',
      name: 'Name',
      op: 'Op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeId: 'string',
      defaultValue: 'string',
      description: 'string',
      name: 'string',
      op: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_bfaf7e110b6d4359977d1686a3f8
   */
  appId?: string;
  attributesOperations?: UpdateProfileRequestAttributesOperations[];
  description?: string;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 10b6d435
   */
  userDefinedId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-jb5sabg80b4ts71g
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributesOperations: 'AttributesOperations',
      description: 'Description',
      name: 'Name',
      userDefinedId: 'UserDefinedId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributesOperations: { 'type': 'array', 'itemType': UpdateProfileRequestAttributesOperations },
      description: 'string',
      name: 'string',
      userDefinedId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributesOperations)) {
      $dara.Model.validateArray(this.attributesOperations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

