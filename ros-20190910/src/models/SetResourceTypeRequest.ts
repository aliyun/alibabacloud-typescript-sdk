// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetResourceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the default version. You can use this parameter to specify the default version of the resource type.
   * 
   * > You can specify only one of the VersionId and DefaultVersionId parameters.
   * 
   * @example
   * v1
   */
  defaultVersionId?: string;
  /**
   * @remarks
   * The description of the resource type or resource type version. The description can be up to 512 characters in length.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The version ID. If you want to modify a version of the resource type, you must specify this parameter. If you do not specify this parameter, only the resource type is modified.
   * 
   * > You can specify only one of the VersionId and DefaultVersionId parameters.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersionId: 'DefaultVersionId',
      description: 'Description',
      resourceType: 'ResourceType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersionId: 'string',
      description: 'string',
      resourceType: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

