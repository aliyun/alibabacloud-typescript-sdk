// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetRecordsResponseBodyRecords extends $dara.Model {
  attributes?: { [key: string]: string };
  data?: string[];
  /**
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
  records?: GetRecordsResponseBodyRecords[];
  /**
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
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

