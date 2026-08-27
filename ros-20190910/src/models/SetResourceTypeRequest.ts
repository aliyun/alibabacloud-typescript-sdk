// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetResourceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the default version. Specify this parameter to set the default version for the resource type.
   * 
   * > You can specify either VersionId or DefaultVersionId.
   * 
   * @example
   * v1
   */
  defaultVersionId?: string;
  /**
   * @remarks
   * The description of the resource type or a version of the resource type. The description can be up to 512 characters in length.
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
   * The version ID. Specify this parameter to modify a specific version of the resource type. Otherwise, the description of the resource type itself is modified.
   * 
   * > You can specify either VersionId or DefaultVersionId.
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

