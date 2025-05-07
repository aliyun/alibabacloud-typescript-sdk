// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl extends $dara.Model {
  /**
   * @remarks
   * The number of requests that match protection rules.
   * 
   * @example
   * 21862
   */
  count?: number;
  /**
   * @remarks
   * The request URL.
   * 
   * >  The value is Base64-encoded.
   * 
   * @example
   * d3d3LmFsaXl1bmRvYy5jb20vcGF0aDM=
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

