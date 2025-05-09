// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProcCorrectOrderRequestParam } from "./CreateProcCorrectOrderRequestParam";


export class CreateProcCorrectOrderRequest extends $dara.Model {
  /**
   * @example
   * order_attachment.txt
   */
  attachmentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  param?: CreateProcCorrectOrderRequestParam;
  relatedUserList?: number[];
  /**
   * @example
   * 4***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateProcCorrectOrderRequestParam,
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
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

