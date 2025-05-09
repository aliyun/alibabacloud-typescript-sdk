// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataSourceResponseBodyDataSource } from "./GetDataSourceResponseBodyDataSource";


export class GetDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data source.
   */
  dataSource?: GetDataSourceResponseBodyDataSource;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: GetDataSourceResponseBodyDataSource,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

