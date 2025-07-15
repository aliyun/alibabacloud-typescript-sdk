// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveStreamBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result description. If the request was successful, ok is returned. If the request failed, the failure detail is returned.
   * 
   * @example
   * ok
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B908FF89-B03C-4831-B55B-48D2A7DA0A68
   */
  requestId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   ok: The request was successful.
   * *   fail: The request failed.
   * 
   * >  If any parameter failed to be configured, the request failed.
   * 
   * @example
   * ok
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

