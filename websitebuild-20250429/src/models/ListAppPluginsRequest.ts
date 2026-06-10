// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPluginsRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID of the application instance
   * 
   * @example
   * WD20250820143531000001
   */
  bizId?: string;
  /**
   * @remarks
   * Number of results per query.  
   * 
   * Valid range: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token indicating the start of the next query. Empty if there is no next query.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Status of the dataset acceleration instance. Valid values:  
   * - Created: Initialization.  
   * - Running: Running.  
   * - Stopped: Stopped.
   * 
   * @example
   * http_whitelist
   */
  phase?: string;
  /**
   * @remarks
   * Platform
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

