// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackIntelligentProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The protection mode for the intelligent HTTP DDoS protection feature. Valid values:
   * 
   * - **observe**: The system generates warnings for attack traffic but does not block it.
   * 
   * - **defense**: The system blocks detected attack traffic.
   * 
   * @example
   * defense
   */
  aiMode?: string;
  /**
   * @remarks
   * The sensitivity level for the intelligent HTTP DDoS protection feature. Valid values:
   * 
   * - **level0**: very loose
   * 
   * - **level30**: loose
   * 
   * - **level60**: normal
   * 
   * - **level90**: strict
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

