// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackIntelligentProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The mode for the intelligent HTTP DDoS protection feature. Valid values:
   * 
   * - **observe**: The system generates warnings for attack traffic but does not block it.
   * 
   * - **defense**: The system blocks detected attack traffic.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * level60
   */
  aiTemplate?: string;
  /**
   * @remarks
   * The ID of the site. You can obtain the site ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      aiMode: 'AiMode',
      aiTemplate: 'AiTemplate',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiMode: 'string',
      aiTemplate: 'string',
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

