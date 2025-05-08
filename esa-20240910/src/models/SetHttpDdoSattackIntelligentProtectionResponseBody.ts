// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackIntelligentProtectionResponseBody extends $dara.Model {
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
   * 156A6B-677B1A-4297B7-9187B7-2B44792
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

