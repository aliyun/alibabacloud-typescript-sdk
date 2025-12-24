// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenApiListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   200: successful.
   * *   500: failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the returned APIs.
   * 
   * @example
   * [{"apis":[{"summary":"get account information","deprecated":false,"name":"DescAccountSummary","title":"get account information"}],"childrens":[],"title":"account"}]
   */
  directories?: any;
  /**
   * @remarks
   * The version number of the API.
   * 
   * @example
   * 2018-12-03
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      directories: 'Directories',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directories: 'any',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeOpenApiListResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF2ECA2D-D8E6-5021-BF5C-19DD6D52C5B2
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
      data: DescribeOpenApiListResponseBodyData,
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

