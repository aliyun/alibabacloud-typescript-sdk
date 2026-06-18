// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSAttackIntelligentProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The protection mode for HTTP DDoS intelligent protection. Valid values:
   * 
   * - **observe**: Observe
   * 
   * - **defense**: Defense
   * 
   * @example
   * defense
   */
  aiMode?: string;
  /**
   * @remarks
   * The protection level for HTTP DDoS intelligent protection. Valid values:
   * 
   * - **level0**: Very Loose
   * 
   * - **level30**: Loose
   * 
   * - **level60**: Normal
   * 
   * - **level90**: Strict
   * 
   * @example
   * level60
   */
  aiTemplate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-3C82-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      aiMode: 'AiMode',
      aiTemplate: 'AiTemplate',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiMode: 'string',
      aiTemplate: 'string',
      requestId: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

