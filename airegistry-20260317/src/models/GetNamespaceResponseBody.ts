// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the namespace was created.
   * 
   * @example
   * 2025-11-17T09:57:38+08:00
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * secret for bbtadmin
   */
  description?: string;
  ipWhitelist?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * magic:magic-cn-1us4sed5d01
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * a2a9310a-9d91-4283-b4e2-844f6d45fe64
   */
  namespaceId?: string;
  /**
   * @remarks
   * The number of prompts in the namespace.
   * 
   * @example
   * 1
   */
  promptCount?: number;
  publicAccessEnabled?: boolean;
  publicDomain?: string;
  /**
   * @remarks
   * The scan policy.
   * 
   * The policy contains two configuration items:
   * - minBlockRiskLevel: the risk level for blocking.
   *   - high: blocks high-risk items.
   *   - medium: blocks medium- and high-risk items.
   *   - low: blocks all risk levels including high, medium, and low.
   * - maxSkipRatio: the maximum skip ratio. If the scan skip ratio exceeds this value, the scan is considered as failed.
   * 
   * @example
   * {"minBlockRiskLevel":"medium","maxSkipRatio":0.2}
   */
  scanPolicy?: string;
  /**
   * @remarks
   * The number of skills in the namespace.
   * 
   * @example
   * 1
   */
  skillCount?: number;
  /**
   * @remarks
   * The source of the namespace.
   * 
   * @example
   * magic:magic-cn-1us4sed5d01
   */
  source?: string;
  /**
   * @remarks
   * The source ordinal number of the namespace.
   * 
   * @example
   * 0
   */
  sourceIndex?: number;
  /**
   * @remarks
   * The tags of the namespace.
   * 
   * @example
   * {}
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      ipWhitelist: 'IpWhitelist',
      name: 'Name',
      namespaceId: 'NamespaceId',
      promptCount: 'PromptCount',
      publicAccessEnabled: 'PublicAccessEnabled',
      publicDomain: 'PublicDomain',
      scanPolicy: 'ScanPolicy',
      skillCount: 'SkillCount',
      source: 'Source',
      sourceIndex: 'SourceIndex',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      ipWhitelist: 'string',
      name: 'string',
      namespaceId: 'string',
      promptCount: 'number',
      publicAccessEnabled: 'boolean',
      publicDomain: 'string',
      scanPolicy: 'string',
      skillCount: 'number',
      source: 'string',
      sourceIndex: 'number',
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

export class GetNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The namespace information.
   */
  data?: GetNamespaceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9E87E66-9EF0-5C10-A5E6-924020A0C9B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetNamespaceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

