// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUploadSkillsViaOssResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * VALIDATION_FAILED
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter validation failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * skill-example
   */
  name?: string;
  /**
   * @remarks
   * The resource owner.
   * 
   * @example
   * alice
   */
  owner?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      name: 'name',
      owner: 'owner',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      name: 'string',
      owner: 'string',
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

export class BatchUploadSkillsViaOssResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The batch upload results.
   */
  results?: BatchUploadSkillsViaOssResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': BatchUploadSkillsViaOssResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadSkillsViaOssResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: BatchUploadSkillsViaOssResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BatchUploadSkillsViaOssResponseBodyData,
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

