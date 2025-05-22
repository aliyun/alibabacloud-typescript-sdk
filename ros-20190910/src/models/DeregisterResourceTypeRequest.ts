// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeregisterResourceTypeRequest extends $dara.Model {
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
   * The version ID. If you want to delete a version of the resource type, you must specify this parameter.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

