// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAlidingKnowledgeBaseShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 目标个人目录 ID；不传时自动绑定到用户默认根目录，传入时必须是当前用户的已有个人目录（PERSONAL）
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 知识库显示名称；不传时由后台从远程拉取的根节点名称回填
   * 
   * @example
   * string_value
   */
  kbName?: string;
  /**
   * @remarks
   * 阿里钉知识库的可公开访问 URL
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  kbUrl?: string;
  objectBindingsShrink?: string;
  /**
   * @remarks
   * Agent 命名空间标识，可选
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  syncConfigShrink?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      kbName: 'kbName',
      kbUrl: 'kbUrl',
      objectBindingsShrink: 'objectBindings',
      operatingObjectName: 'operatingObjectName',
      syncConfigShrink: 'syncConfig',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      kbName: 'string',
      kbUrl: 'string',
      objectBindingsShrink: 'string',
      operatingObjectName: 'string',
      syncConfigShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

