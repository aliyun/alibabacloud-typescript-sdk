// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallCloudAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * patch-7bdf679812484df08a956b73e0b3bdf6
   */
  patchId?: string;
  projectId?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  renderingInstanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patchId: 'PatchId',
      projectId: 'ProjectId',
      renderingInstanceId: 'RenderingInstanceId',
      renderingInstanceIdsShrink: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      patchId: 'string',
      projectId: 'string',
      renderingInstanceId: 'string',
      renderingInstanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

