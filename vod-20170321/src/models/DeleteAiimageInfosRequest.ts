// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIImageInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the images that are submitted for AI processing. You can obtain the value of AIImageInfoId from the response to the [ListAIImageInfo](~~ListAIImageInfo~~) operation.
   * 
   * - You can specify a maximum of 10 IDs.
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

