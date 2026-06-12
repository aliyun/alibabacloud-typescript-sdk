// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The additional information of the record. This value is empty if no additional information exists.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The data content of the record.
   */
  data?: string[];
  /**
   * @remarks
   * The write time of the record.
   * 
   * @example
   * 1769065251123
   */
  systemTime?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      data: 'Data',
      systemTime: 'SystemTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      data: { 'type': 'array', 'itemType': 'string' },
      systemTime: 'number',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The records that were read.
   */
  records?: GetRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetRecordsResponseBodyRecords },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

