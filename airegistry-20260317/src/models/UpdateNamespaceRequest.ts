// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceRequest extends $dara.Model {
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
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
   * The scan policy.
   * 
   * The policy contains two configuration items:
   * - minBlockRiskLevel: the risk level for blocking.
   *   - high: blocks high-risk items.
   *   - medium: blocks medium-risk and high-risk items.
   *   - low: blocks all risk levels including high, medium, and low.
   * - maxSkipRatio: the max false positive rate. If the scan skip ratio exceeds this value, the scan is considered failed.
   * 
   * @example
   * {"minBlockRiskLevel":"medium","maxSkipRatio":0.2}
   */
  scanPolicy?: string;
  /**
   * @remarks
   * The tags, separated by commas. Pass an empty string to clear all tags.
   * 
   * @example
   * customer-service,production
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
      scanPolicy: 'ScanPolicy',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      namespaceId: 'string',
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

