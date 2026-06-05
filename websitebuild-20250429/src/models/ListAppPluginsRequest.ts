// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPluginsRequest extends $dara.Model {
  /**
   * @example
   * WD20250820143531000001
   */
  bizId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @example
   * http_whitelist
   */
  phase?: string;
  /**
   * @example
   * linux/amd64
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      phase: 'Phase',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      phase: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

