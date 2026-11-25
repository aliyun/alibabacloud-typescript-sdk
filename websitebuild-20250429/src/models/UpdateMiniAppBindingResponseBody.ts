// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMiniAppBindingResponseBodyData extends $dara.Model {
  privacyDraftId?: string;
  privacyRevision?: string;
  readbackStatus?: string;
  revision?: number;
  status?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      privacyDraftId: 'PrivacyDraftId',
      privacyRevision: 'PrivacyRevision',
      readbackStatus: 'ReadbackStatus',
      revision: 'Revision',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privacyDraftId: 'string',
      privacyRevision: 'string',
      readbackStatus: 'string',
      revision: 'number',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMiniAppBindingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request result.
   */
  data?: UpdateMiniAppBindingResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateMiniAppBindingResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

