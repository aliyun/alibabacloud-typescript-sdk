// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ADB key pairs.
   */
  keyPairIds?: string[];
  /**
   * @remarks
   * The name of the ADB key pair.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * AAAAAYRHtOLVQzCYj17y+OP7LZQBUVVbi0GTu8g5****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairIds: 'KeyPairIds',
      keyPairName: 'KeyPairName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairIds: { 'type': 'array', 'itemType': 'string' },
      keyPairName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keyPairIds)) {
      $dara.Model.validateArray(this.keyPairIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

