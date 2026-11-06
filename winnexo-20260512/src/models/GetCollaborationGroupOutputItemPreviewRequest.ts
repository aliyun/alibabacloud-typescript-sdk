// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCollaborationGroupOutputItemPreviewRequest extends $dara.Model {
  /**
   * @remarks
   * 协作空间ID，必填，长度1至64。调用者必须是该租户下该空间的有效成员。可从ListCollaborationGroups返回的items中获取。
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 对话生成文件的产出明细ID。取GetNodeDetail返回的artifacts中ref.kind为USER_OUTPUT_ITEM的ref.id；不是artifactId。
   * 
   * This parameter is required.
   * 
   * @example
   * 51469466
   */
  itemId?: string;
  /**
   * @remarks
   * 业务租户ID，可选。必须属于当前调用身份的可访问租户；无权访问时拒绝请求。未传时按现有鉴权规则解析租户，多租户用户无法唯一确定时需显式指定。
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      itemId: 'itemId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      itemId: 'string',
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

