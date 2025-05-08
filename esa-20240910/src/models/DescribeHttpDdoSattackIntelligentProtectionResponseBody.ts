// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSAttackIntelligentProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The mode of smart HTTP DDoS protection. Valid values:
   * 
   * *   **observe**: alert.
   * *   **defense**: block.
   * 
   * @example
   * defense
   */
  aiMode?: string;
  /**
   * @remarks
   * The level of smart HTTP DDoS protection. Valid values:
   * 
   * *   **level0**: very loose.
   * *   **level30**: loose.
   * *   **level60**: normal.
   * *   **level90**: strict.
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
   * The website ID.
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

