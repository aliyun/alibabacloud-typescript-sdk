// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WD20250820143531000001
   */
  bizId?: string;
  /**
   * @remarks
   * The number of entries per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. This parameter is empty if no more results are available.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The status of the Dataset Accelerator instance. Valid values:
   * - Created: init.
   * - Running: running.
   * - Stopped: stopped.
   * 
   * @example
   * http_whitelist
   */
  phase?: string;
  /**
   * @remarks
   * The platform.
   * 
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

