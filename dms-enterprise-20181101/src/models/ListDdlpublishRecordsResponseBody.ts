// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDDLPublishRecordsResponseBodyDDLPublishRecordList } from "./ListDdlpublishRecordsResponseBodyDdlpublishRecordList";


export class ListDDLPublishRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the publishing records.
   */
  DDLPublishRecordList?: ListDDLPublishRecordsResponseBodyDDLPublishRecordList[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A1549FB0-D4B8-4140-919F-17322C1072B8
   */
  requestId?: string;
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
      DDLPublishRecordList: 'DDLPublishRecordList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDLPublishRecordList: { 'type': 'array', 'itemType': ListDDLPublishRecordsResponseBodyDDLPublishRecordList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.DDLPublishRecordList)) {
      $dara.Model.validateArray(this.DDLPublishRecordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

