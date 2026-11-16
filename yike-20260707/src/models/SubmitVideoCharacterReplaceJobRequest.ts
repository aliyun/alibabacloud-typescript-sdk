// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoCharacterReplaceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the video character replacement application. Use a configured application.
   * 
   * This parameter is required.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The application input parameters as a JSON-serialized string. The field names and material requirements are subject to the input definition of the corresponding AppId.
   * 
   * @example
   * {"LoadImage.1.TargetImage":"1a7852b032c371f0b64fe6f6c74b****"}
   */
  appParams?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * folder-u3ilwhoc36ux9a****
   */
  folderId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_061716****
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appParams: 'AppParams',
      folderId: 'FolderId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appParams: 'string',
      folderId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

