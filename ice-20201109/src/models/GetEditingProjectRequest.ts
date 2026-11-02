// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * ****fb2101bf24b2754cb318787dc****
   */
  projectId?: string;
  /**
   * @remarks
   * The identifier of the request source. Valid values:
   * - OpenAPI: Default. No timeline conversion is performed.
   * - WebSDK: If this field is passed, the project timeline is automatically converted to the frontend style, and the associated media assets in the timeline are bound to the project for preview in the frontend WebSDK.
   * 
   * @example
   * WebSDK
   */
  requestSource?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      requestSource: 'RequestSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      requestSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

