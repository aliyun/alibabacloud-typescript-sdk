// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackIntelligentProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP DDoS depth learning and defense pattern. Valid values:
   * - **observe**: Monitor.
   * - **defense**: Block.
   * 
   * This parameter is required.
   * 
   * @example
   * defense
   */
  aiMode?: string;
  /**
   * @remarks
   * The HTTP DDoS deep learning and protection level. Valid values:
   * - **level0**: Very loose.
   * - **level30**: Loose.
   * - **level60**: Normal.
   * - **level90**: Strict.
   * 
   * This parameter is required.
   * 
   * @example
   * level60
   */
  aiTemplate?: string;
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
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

