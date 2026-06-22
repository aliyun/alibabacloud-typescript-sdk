// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMatchedMaliciousNamesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The display name of the malicious sample type.
   * 
   * @example
   * displayname
   */
  displayName?: string;
  /**
   * @remarks
   * The key of the malicious sample type.
   * 
   * @example
   * key
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMatchedMaliciousNamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page in a paged query. If paging is not used, this value indicates the total number of entries.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeMatchedMaliciousNamesResponseBodyData[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * C7CD1BE6-97A2-5524-A529-B55C63E55D59
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeMatchedMaliciousNamesResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

