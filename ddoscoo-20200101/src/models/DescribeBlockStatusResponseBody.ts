// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBlockStatusResponseBodyStatusList } from "./DescribeBlockStatusResponseBodyStatusList";


export class DescribeBlockStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of details of the Diversion from Origin Server configurations of the instance.
   */
  statusList?: DescribeBlockStatusResponseBodyStatusList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusList: { 'type': 'array', 'itemType': DescribeBlockStatusResponseBodyStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

