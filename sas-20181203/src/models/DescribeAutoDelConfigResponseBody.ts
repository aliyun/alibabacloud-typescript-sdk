// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoDelConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of days during which a detected vulnerability is retained before the vulnerability is automatically deleted.
   * 
   * @example
   * 30
   */
  days?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C56F66FD-C4EE-4813-ABDC-4FF94B6C384E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: 'number',
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

