// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiExportsResponseBodyApiExports } from "./DescribeApiExportsResponseBodyApiExports";


export class DescribeApiExportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data export tasks.
   */
  apiExports?: DescribeApiExportsResponseBodyApiExports[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9532525-E885-54E7-A178-D5554D563AFB
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the data export task. Valid values:
   * 
   * *   **expired**: The file is expired.
   * *   **exporting**: Data is being exported.
   * *   **completed**: Data is exported.
   * 
   * @example
   * 7
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apiExports: 'ApiExports',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiExports: { 'type': 'array', 'itemType': DescribeApiExportsResponseBodyApiExports },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiExports)) {
      $dara.Model.validateArray(this.apiExports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

