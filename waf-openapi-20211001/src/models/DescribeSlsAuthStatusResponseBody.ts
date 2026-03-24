// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsAuthStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3589D3A3-4A04-51CB-AA89-353ED20ACB10
   */
  requestId?: string;
  /**
   * @remarks
   * The authorization status. Valid values:
   * 
   * - **true**: indicates that authorization is granted.
   * 
   * - **false**: indicates that authorization is not granted.
   * 
   * @example
   * false
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

