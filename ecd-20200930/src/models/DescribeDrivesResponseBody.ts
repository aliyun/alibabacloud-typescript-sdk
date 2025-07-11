// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDrivesResponseBodyDrives } from "./DescribeDrivesResponseBodyDrives";


export class DescribeDrivesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 2
   */
  count?: number;
  drives?: DescribeDrivesResponseBodyDrives[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * AAAA****
   */
  nextToken?: string;
  /**
   * @example
   * B7AA****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      drives: 'Drives',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      drives: { 'type': 'array', 'itemType': DescribeDrivesResponseBodyDrives },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.drives)) {
      $dara.Model.validateArray(this.drives);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

