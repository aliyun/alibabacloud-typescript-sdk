// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader extends $dara.Model {
  /**
   * @remarks
   * The HTTP headers.
   * 
   * @example
   * Content-Type
   */
  headerName?: string;
  /**
   * @remarks
   * The values of the HTTP headers.
   * 
   * @example
   * 86400
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

