// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveKnowledgeBaseResourceRequest extends $dara.Model {
  /**
   * @remarks
   * 目标知识库 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleKnowledgeId
   */
  knowledgeId?: string;
  /**
   * @remarks
   * 源目录 ID（资源当前所在的企业知识库目录）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceDirectoryId
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * 待移动的资源 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 目标目录 ID（资源即将移动到的企业知识库目录）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleTargetDirectoryId
   */
  targetDirectoryId?: string;
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
      knowledgeId: 'knowledgeId',
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      targetDirectoryId: 'targetDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'string',
      sourceDirectoryId: 'string',
      sourceId: 'string',
      targetDirectoryId: 'string',
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

