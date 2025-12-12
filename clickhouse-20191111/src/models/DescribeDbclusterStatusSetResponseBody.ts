// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterStatusSetResponseBody extends $dara.Model {
  /**
   * @example
   * DE309AA1-BD83-5E1F-9945-8A4D336E0829
   */
  requestId?: string;
  statusSet?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusSet: 'StatusSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusSet)) {
      $dara.Model.validateArray(this.statusSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

