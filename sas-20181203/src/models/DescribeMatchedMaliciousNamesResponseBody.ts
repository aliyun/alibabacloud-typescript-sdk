// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMatchedMaliciousNamesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The display name of the malicious image sample type.
   * 
   * @example
   * displayname
   */
  displayName?: string;
  /**
   * @remarks
   * The key of the malicious image sample type.
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
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeMatchedMaliciousNamesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
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

