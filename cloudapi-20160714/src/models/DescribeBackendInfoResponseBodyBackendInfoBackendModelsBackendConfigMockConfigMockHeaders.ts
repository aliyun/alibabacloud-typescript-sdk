// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders extends $dara.Model {
  /**
   * @remarks
   * The header name.
   * 
   * @example
   * test
   */
  headerName?: string;
  /**
   * @remarks
   * The header value.
   * 
   * @example
   * 123
   */
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'HeaderName',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
      headerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

