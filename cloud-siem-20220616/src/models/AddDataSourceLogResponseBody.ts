// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of added logs. A value of 1 indicates success. A value of 0 or less indicates failure.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the log. Threat Analysis calculates this ID as an MD5 hash value based on specific parameters.
   * 
   * @example
   * ef33097c9d1fdb0b9c7e8c7ca320pkl1
   */
  logInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      logInstanceId: 'LogInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      logInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: AddDataSourceLogResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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
      data: AddDataSourceLogResponseBodyData,
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

