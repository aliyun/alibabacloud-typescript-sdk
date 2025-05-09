// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataArchiveOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The parameters for archiving data.
   * 
   * This parameter is required.
   */
  paramShrink?: string;
  /**
   * @remarks
   * The ID of the parent ticket. A parent ticket is generated only when a child ticket is created.
   * 
   * @example
   * 123****
   */
  parentId?: number;
  /**
   * @remarks
   * The type of the plug-in. Default value: DATA_ARCHIVE.
   * 
   * @example
   * DATA_ARCHIVE
   */
  pluginType?: string;
  /**
   * @remarks
   * The list of the related users.
   */
  relatedUserListShrink?: string;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      paramShrink: 'Param',
      parentId: 'ParentId',
      pluginType: 'PluginType',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      paramShrink: 'string',
      parentId: 'number',
      pluginType: 'string',
      relatedUserListShrink: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

