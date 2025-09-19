// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHoneyPotAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total quota.
   * 
   * @example
   * 10
   */
  honeyPotAuthCount?: number;
  /**
   * @remarks
   * The quota that is consumed.
   * 
   * @example
   * 4
   */
  honeyPotCount?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0F5023B6-9C1F-459F-ACCC-8B4636804037
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      honeyPotAuthCount: 'HoneyPotAuthCount',
      honeyPotCount: 'HoneyPotCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeyPotAuthCount: 'number',
      honeyPotCount: 'number',
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

