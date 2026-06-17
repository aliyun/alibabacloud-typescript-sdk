// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchPolarClawConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * A list of the top-level configuration keys that were modified.
   */
  patchedKeys?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the gateway was restarted.
   * 
   * @example
   * true
   */
  restarted?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      ok: 'Ok',
      patchedKeys: 'PatchedKeys',
      requestId: 'RequestId',
      restarted: 'Restarted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      ok: 'boolean',
      patchedKeys: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      restarted: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.patchedKeys)) {
      $dara.Model.validateArray(this.patchedKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

