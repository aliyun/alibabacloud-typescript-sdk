// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProfileRequestAttributesOperations extends $dara.Model {
  attributeId?: string;
  defaultValue?: string;
  description?: string;
  name?: string;
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
   */
  appId?: string;
  attributesOperations?: UpdateProfileRequestAttributesOperations[];
  description?: string;
  name?: string;
  userDefinedId?: string;
  /**
   * @remarks
   * This parameter is required.
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

