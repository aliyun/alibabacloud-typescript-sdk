// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of logs that are added. The value 1 indicates that the log is added, and a value less than or equal to 0 indicates that the log failed to be added.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the log. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters.
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

