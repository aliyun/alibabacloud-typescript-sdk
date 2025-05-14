// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMultiDimTableRecordsResponseBodyRecordsCreatedBy } from "./ListMultiDimTableRecordsResponseBodyRecordsCreatedBy";
import { ListMultiDimTableRecordsResponseBodyRecordsLastModifiedBy } from "./ListMultiDimTableRecordsResponseBodyRecordsLastModifiedBy";


export class ListMultiDimTableRecordsResponseBodyRecords extends $dara.Model {
  createdBy?: ListMultiDimTableRecordsResponseBodyRecordsCreatedBy;
  /**
   * @example
   * xxx
   */
  createdTime?: number;
  /**
   * @example
   * title,shortTitle
   */
  fields?: { [key: string]: any };
  /**
   * @example
   * 123
   */
  id?: string;
  lastModifiedBy?: ListMultiDimTableRecordsResponseBodyRecordsLastModifiedBy;
  /**
   * @example
   * xxx
   */
  lastModifiedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdTime: 'CreatedTime',
      fields: 'Fields',
      id: 'Id',
      lastModifiedBy: 'LastModifiedBy',
      lastModifiedTime: 'LastModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: ListMultiDimTableRecordsResponseBodyRecordsCreatedBy,
      createdTime: 'number',
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      lastModifiedBy: ListMultiDimTableRecordsResponseBodyRecordsLastModifiedBy,
      lastModifiedTime: 'number',
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

