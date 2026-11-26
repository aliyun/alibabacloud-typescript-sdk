// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRumSymbolFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of object paths of the symbol files to delete. This parameter is required and cannot be an empty array. Set the value to the artifactPath returned by GetRumSymbolFiles. Up to 1,000 paths are supported per call. Only user-uploaded symbol files under the current application can be deleted. System symbol files cannot be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * ["user/workspace/service-id/3.0.0/build-1/new-app.map"]
   */
  filePaths?: string[];
  /**
   * @remarks
   * The ID of the RUM application service.
   * 
   * This parameter is required.
   * 
   * @example
   * a1b2c3d4e5@f67890
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * default-cms-1234567890-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      filePaths: 'filePaths',
      serviceId: 'serviceId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePaths: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filePaths)) {
      $dara.Model.validateArray(this.filePaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

