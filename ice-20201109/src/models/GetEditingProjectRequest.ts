// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * ****fb2101bf24b2754cb318787dc****
   */
  projectId?: string;
  /**
   * @remarks
   * The ID of the request source. Valid values:
   * 
   * \\- OpenAPI (default): Timeline conversion is not performed.
   * 
   * \\- WebSDK: If you specify this value, the project timeline is automatically converted into the frontend style, and the materials in the timeline are associated with the project to enable preview by using frontend web SDKs.
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

