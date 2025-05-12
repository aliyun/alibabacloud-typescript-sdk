// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizedListHeadersResponseBodyHeaders extends $dara.Model {
  /**
   * @example
   * display
   */
  displayType?: string;
  /**
   * @example
   * pay_type
   */
  headerKey?: string;
  headerName?: string;
  static names(): { [key: string]: string } {
    return {
      displayType: 'DisplayType',
      headerKey: 'HeaderKey',
      headerName: 'HeaderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayType: 'string',
      headerKey: 'string',
      headerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

