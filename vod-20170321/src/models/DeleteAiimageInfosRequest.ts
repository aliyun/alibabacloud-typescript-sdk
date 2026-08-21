// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIImageInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of AI image information. This parameter consists of one or more AIImageInfoId values. The AIImageInfoId is the value of the AIImageInfoId response parameter returned by the [ListAIImageInfo](https://help.aliyun.com/document_detail/186924.html) operation.
   * - A maximum of 10 IDs are supported.
   * - Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * b89a6aabf144*****6197ebd6fe6cf29
   */
  AIImageInfoIds?: string;
  static names(): { [key: string]: string } {
    return {
      AIImageInfoIds: 'AIImageInfoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIImageInfoIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

