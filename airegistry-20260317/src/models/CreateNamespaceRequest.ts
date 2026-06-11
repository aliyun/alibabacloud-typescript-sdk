// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceRequest extends $dara.Model {
  /**
   * @example
   * 用于管理客服场景的Prompt
   */
  description?: string;
  /**
   * @example
   * 我的Prompt空间
   */
  name?: string;
  /**
   * @example
   * {"minBlockRiskLevel":"medium","maxSkipRatio":0.2}
   */
  scanPolicy?: string;
  /**
   * @example
   * customer-service,production
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      scanPolicy: 'ScanPolicy',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      scanPolicy: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

