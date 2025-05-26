// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApsDatasourceResponseBodyApsDatasource } from "./DescribeApsDatasourceResponseBodyApsDatasource";


export class DescribeApsDatasourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried APS data source.
   */
  apsDatasource?: DescribeApsDatasourceResponseBodyApsDatasource;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-**D8-5***-A***-****587
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apsDatasource: 'ApsDatasource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsDatasource: DescribeApsDatasourceResponseBodyApsDatasource,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apsDatasource && typeof (this.apsDatasource as any).validate === 'function') {
      (this.apsDatasource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

