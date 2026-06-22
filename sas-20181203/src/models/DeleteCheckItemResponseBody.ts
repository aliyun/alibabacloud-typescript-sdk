// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCheckItemResponseBodyCheckItems extends $dara.Model {
  /**
   * @remarks
   * The check item ID.
   * 
   * @example
   * 1000000000001
   */
  checkId?: number;
  /**
   * @remarks
   * The check item name.
   * 
   * @example
   * testCheckItemName
   */
  checkShowName?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkShowName: 'CheckShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkShowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCheckItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of deleted custom check items.
   */
  checkItems?: DeleteCheckItemResponseBodyCheckItems[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 20456DD5-5CBF-5015-9173-12CA4246B***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkItems: 'CheckItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': DeleteCheckItemResponseBodyCheckItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkItems)) {
      $dara.Model.validateArray(this.checkItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

