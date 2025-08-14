// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchIndexJobRerunResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The media asset IDs that do not exist.
   */
  mediaIdsNoExist?: string[];
  static names(): { [key: string]: string } {
    return {
      mediaIdsNoExist: 'MediaIdsNoExist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIdsNoExist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.mediaIdsNoExist)) {
      $dara.Model.validateArray(this.mediaIdsNoExist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchIndexJobRerunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: SearchIndexJobRerunResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SearchIndexJobRerunResponseBodyData,
      requestId: 'string',
      success: 'string',
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

