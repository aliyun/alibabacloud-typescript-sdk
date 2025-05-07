// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsAuthStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3589D3A3-4A04-51CB-AA89-353ED20A****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether WAF is authorized to access Logstores. Valid values:
   * 
   * *   **true**
   * *   **false**
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

