// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRenderingSessionRequestClientParams extends $dara.Model {
  /**
   * @example
   * 106.11.43.1
   */
  clientIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRenderingSessionRequest extends $dara.Model {
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
  clientParams?: StartRenderingSessionRequestClientParams;
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
      clientParams: 'ClientParams',
      patchId: 'PatchId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      clientParams: StartRenderingSessionRequestClientParams,
      patchId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    if(this.clientParams && typeof (this.clientParams as any).validate === 'function') {
      (this.clientParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

