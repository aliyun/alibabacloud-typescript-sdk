// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiDimTableRecordResponseBodyCreatedBy } from "./GetMultiDimTableRecordResponseBodyCreatedBy";
import { GetMultiDimTableRecordResponseBodyLastModifiedBy } from "./GetMultiDimTableRecordResponseBodyLastModifiedBy";


export class GetMultiDimTableRecordResponseBody extends $dara.Model {
  createdBy?: GetMultiDimTableRecordResponseBodyCreatedBy;
  /**
   * @example
   * xxx
   */
  createdTime?: number;
  /**
   * @example
   * xxx
   */
  fields?: { [key: string]: any };
  /**
   * @example
   * xxx
   */
  id?: string;
  lastModifiedBy?: GetMultiDimTableRecordResponseBodyLastModifiedBy;
  /**
   * @example
   * xxx
   */
  lastModifiedTime?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
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
      createdBy: 'CreatedBy',
      createdTime: 'CreatedTime',
      fields: 'Fields',
      id: 'Id',
      lastModifiedBy: 'LastModifiedBy',
      lastModifiedTime: 'LastModifiedTime',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: GetMultiDimTableRecordResponseBodyCreatedBy,
      createdTime: 'number',
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      lastModifiedBy: GetMultiDimTableRecordResponseBodyLastModifiedBy,
      lastModifiedTime: 'number',
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.createdBy && typeof (this.createdBy as any).validate === 'function') {
      (this.createdBy as any).validate();
    }
    if(this.fields) {
      $dara.Model.validateMap(this.fields);
    }
    if(this.lastModifiedBy && typeof (this.lastModifiedBy as any).validate === 'function') {
      (this.lastModifiedBy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

