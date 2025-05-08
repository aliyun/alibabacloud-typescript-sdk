// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackIntelligentProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The mode of smart HTTP DDoS protection. Valid values:
   * 
   * *   **observe**: alert.
   * *   **defense**: block.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * level60
   */
  aiTemplate?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
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

