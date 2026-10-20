// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackIntelligentProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP DDoS intelligent protection pattern. Valid values:
   * - **observe**: Warning.
   * - **defense**: Defense.
   * 
   * @example
   * defense
   */
  aiMode?: string;
  /**
   * @remarks
   * The HTTP DDoS intelligent protection level. Valid values:
   * - **level0**: Very loose.
   * - **level30**: Loose.
   * - **level60**: Normal.
   * - **level90**: Strict.
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
   * The ID of the site.
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

