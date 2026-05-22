// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEdgeContainerAppVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which can be obtained by calling the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * app-96253477062511****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the version that you want to delete. To obtain the version ID, call the [ListEdgeContainerAppVersions](~~ListEdgeContainerAppVersions~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ver-89884764010378****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

