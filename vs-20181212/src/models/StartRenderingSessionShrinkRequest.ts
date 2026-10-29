// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRenderingSessionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud application ID.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * The unique ID of the end user.
   * 
   * This parameter is required.
   * 
   * @example
   * 04c30850-1d91-4da1-b811-66d0ee94af7d
   */
  clientId?: string;
  /**
   * @remarks
   * The parameter information of the end user.
   */
  clientParamsShrink?: string;
  /**
   * @remarks
   * The cloud application patch package ID.
   * 1. By default, the stable version of the application specified by AppId is started. If no stable patch version is set, the original version is started.
   * 2. If you specify origin, the original version is started.
   * 
   * @example
   * patch-03fa76e8e13a49b63456b063dgh309b4
   */
  patchId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientId: 'ClientId',
      clientParamsShrink: 'ClientParams',
      patchId: 'PatchId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      clientParamsShrink: 'string',
      patchId: 'string',
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

