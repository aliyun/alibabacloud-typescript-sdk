// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentKnowledgeBaseResponseBodyData extends $dara.Model {
  /**
   * @example
   * kb-HZ-ra99akg0t*********1bku
   */
  kbUuid?: string;
  static names(): { [key: string]: string } {
    return {
      kbUuid: 'KbUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kbUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentKnowledgeBaseResponseBody extends $dara.Model {
  data?: CreateDataAgentKnowledgeBaseResponseBodyData;
  /**
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDataAgentKnowledgeBaseResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

