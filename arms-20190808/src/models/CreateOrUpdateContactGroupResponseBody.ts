// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateContactGroupResponseBodyAlertContactGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact group.
   * 
   * @example
   * 123
   */
  contactGroupId?: number;
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * @example
   * TestGroup
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The IDs of the contacts that are included in the alert contact group.
   * 
   * @example
   * [1,2,3]
   */
  contactIds?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      contactGroupName: 'string',
      contactIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the alert contact group.
   */
  alertContactGroup?: CreateOrUpdateContactGroupResponseBodyAlertContactGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9319A57D-2D9E-472A-B69B-CF3CD16D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertContactGroup: 'AlertContactGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContactGroup: CreateOrUpdateContactGroupResponseBodyAlertContactGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertContactGroup && typeof (this.alertContactGroup as any).validate === 'function') {
      (this.alertContactGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

