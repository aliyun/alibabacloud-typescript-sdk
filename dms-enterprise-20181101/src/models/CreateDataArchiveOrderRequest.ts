// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataArchiveOrderRequestParam } from "./CreateDataArchiveOrderRequestParam";


export class CreateDataArchiveOrderRequest extends $dara.Model {
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
  param?: CreateDataArchiveOrderRequestParam;
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
  relatedUserList?: string[];
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
      param: 'Param',
      parentId: 'ParentId',
      pluginType: 'PluginType',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      param: CreateDataArchiveOrderRequestParam,
      parentId: 'number',
      pluginType: 'string',
      relatedUserList: { 'type': 'array', 'itemType': 'string' },
      tid: 'number',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    if(Array.isArray(this.relatedUserList)) {
      $dara.Model.validateArray(this.relatedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

