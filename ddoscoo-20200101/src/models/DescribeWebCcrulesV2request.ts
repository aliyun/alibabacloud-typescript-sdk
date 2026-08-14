// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesV2Request extends $dara.Model {
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * 0
   */
  offset?: string;
  /**
   * @example
   * manual
   */
  owner?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      offset: 'Offset',
      owner: 'Owner',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      offset: 'string',
      owner: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

