// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetUserIdByOpenDingtalkIdResponseBodyResults extends $dara.Model {
  /**
   * @example
   * User.not.found
   */
  errorMessage?: string;
  /**
   * @example
   * DTOJdYJ2IQC4HuexhtjsS8Qxxxx
   */
  openDingtalkId?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      openDingtalkId: 'OpenDingtalkId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      openDingtalkId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetUserIdByOpenDingtalkIdResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * []
   */
  results?: BatchGetUserIdByOpenDingtalkIdResponseBodyResults[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      results: 'results',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchGetUserIdByOpenDingtalkIdResponseBodyResults },
      vendorRequestId: 'string',
      vendorType: 'string',
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

