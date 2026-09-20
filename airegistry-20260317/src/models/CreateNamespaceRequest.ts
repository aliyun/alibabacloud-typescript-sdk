// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace description.
   * 
   * @example
   * 用于管理客服场景的Prompt
   */
  description?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * 我的Prompt空间
   */
  name?: string;
  /**
   * @remarks
   * The scan policy.
   * 
   * This parameter contains two configuration items:
   * - minBlockRiskLevel: the risk level for blocking.
   *   - high: blocks high-risk items.
   *   - medium: blocks medium-risk and high-risk items.
   *   - low: blocks all risk levels including high, medium, and low.
   * - maxSkipRatio: the max false positive rate. If the scan skip ratio exceeds this value, the scan is considered as failed.
   * 
   * @example
   * {"minBlockRiskLevel":"medium","maxSkipRatio":0.2}
   */
  scanPolicy?: string;
  /**
   * @remarks
   * The tags. Separate multiple tags with commas.
   * 
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

