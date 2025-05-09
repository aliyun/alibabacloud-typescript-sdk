// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataTrackOrderRequestParam } from "./CreateDataTrackOrderRequestParam";


export class CreateDataTrackOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The purpose or objective of the data tracking ticket. This parameter is used to help reduce unnecessary communication.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The parameters of the ticket.
   * 
   * This parameter is required.
   */
  param?: CreateDataTrackOrderRequestParam;
  /**
   * @remarks
   * The IDs of the operators that are related to the ticket.
   */
  relatedUserList?: string[];
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      param: CreateDataTrackOrderRequestParam,
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

