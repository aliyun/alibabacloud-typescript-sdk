// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHoneyPotAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of authorizations.
   * 
   * @example
   * 10
   */
  honeyPotAuthCount?: number;
  /**
   * @remarks
   * The number of consumed authorizations.
   * 
   * @example
   * 4
   */
  honeyPotCount?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
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

