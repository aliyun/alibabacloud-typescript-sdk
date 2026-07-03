// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the project and Logstore created by the threat analysis service exist in your Simple Log Service. Valid values:
   * 
   * - true: The project and Logstore exist.
   * 
   * - false: The project and Logstore do not exist.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CCEEE128-6607-503E-AAA6-C5E57D94****
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
      data: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

