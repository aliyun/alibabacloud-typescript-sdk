// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of modified data sources. A value of 1 indicates success. A value of 0 or less indicates failure.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash that is calculated based on the values of other parameters.
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

export class ModifyDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyDataSourceResponseBodyData;
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
      data: ModifyDataSourceResponseBodyData,
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

