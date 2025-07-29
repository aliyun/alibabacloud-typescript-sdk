// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterDiagnosisCheckItemsResponseBodyCheckItems extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Check whether the node can access host dns service
   */
  desc?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * HostDNS
   */
  display?: string;
  /**
   * @remarks
   * The name of the group to which the check item belongs.
   * 
   * @example
   * Node
   */
  group?: string;
  /**
   * @remarks
   * The severity level of the check result.
   * 
   * Valid values:
   * 
   * *   normal
   * *   warning
   * *   error
   * 
   * @example
   * normal
   */
  level?: string;
  /**
   * @remarks
   * The check result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * HostDNS
   */
  name?: string;
  /**
   * @remarks
   * The reference value.
   * 
   * @example
   * True
   */
  refer?: string;
  /**
   * @remarks
   * The value of the check item.
   * 
   * @example
   * True
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      display: 'display',
      group: 'group',
      level: 'level',
      message: 'message',
      name: 'name',
      refer: 'refer',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      display: 'string',
      group: 'string',
      level: 'string',
      message: 'string',
      name: 'string',
      refer: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDiagnosisCheckItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check item.
   */
  checkItems?: GetClusterDiagnosisCheckItemsResponseBodyCheckItems[];
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the check is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1DFFD8C6-259E-582B-8B40-002C17DC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkItems: 'check_items',
      code: 'code',
      isSuccess: 'is_success',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': GetClusterDiagnosisCheckItemsResponseBodyCheckItems },
      code: 'string',
      isSuccess: 'boolean',
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

