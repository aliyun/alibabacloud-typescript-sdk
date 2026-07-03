// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of data sources that were added. A value of 1 indicates success. A value of 0 or less indicates failure.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the data source. The threat analysis feature generates the ID by calculating an MD5 hash of the parameter values.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      dataSourceInstanceId: 'DataSourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      dataSourceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: AddDataSourceResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
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
      data: AddDataSourceResponseBodyData,
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

