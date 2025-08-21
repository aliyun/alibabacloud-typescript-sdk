// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRenderingSessionShrinkRequest extends $dara.Model {
  /**
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 04c30850-1d91-4da1-b811-66d0ee94af7d
   */
  clientId?: string;
  clientParamsShrink?: string;
  /**
   * @example
   * patch-03fa76e8e13a49b63456b063dgh309b4
   */
  patchId?: string;
  /**
   * @remarks
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

