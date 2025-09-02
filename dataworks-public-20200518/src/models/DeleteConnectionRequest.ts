// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The data source ID. You can call the [ListConnection](https://help.aliyun.com/document_detail/173911.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  connectionId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

