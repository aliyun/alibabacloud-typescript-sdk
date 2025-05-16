// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAddonResponseBody extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W4g****
   */
  addonId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      clusterId: 'ClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      clusterId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

