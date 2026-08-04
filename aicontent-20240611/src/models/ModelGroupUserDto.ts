// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelGroupClientKeyItemDTO } from "./ModelGroupClientKeyItemDto";


export class ModelGroupUserDTO extends $dara.Model {
  /**
   * @example
   * []
   */
  apiKeys?: ModelGroupClientKeyItemDTO[];
  /**
   * @example
   * 30001
   */
  userId?: number;
  /**
   * @example
   * Zhang San
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'apiKeys',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: { 'type': 'array', 'itemType': ModelGroupClientKeyItemDTO },
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

