// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProhibitedSoftwareRequestSoftwareId extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prohibited software is a system built-in prohibited software. Valid values:
   * - **true**: A system built-in prohibited software that is shared across all Alibaba Cloud accounts and cannot be modified or deleted.
   * - **false**: A custom prohibited software under the current Alibaba Cloud account.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The prohibited software ID. You can obtain the value from the following operations:
   * - [ListProhibitedSoftware](~~ListProhibitedSoftware~~): Lists prohibited software.
   * - [CreateProhibitedSoftware](~~CreateProhibitedSoftware~~): Creates custom prohibited software.
   * 
   * @example
   * swb-3e6a1f9c4b28****
   */
  softwareId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      softwareId: 'SoftwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      softwareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProhibitedSoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * The prohibited software ID.
   */
  softwareId?: GetProhibitedSoftwareRequestSoftwareId;
  static names(): { [key: string]: string } {
    return {
      softwareId: 'SoftwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareId: GetProhibitedSoftwareRequestSoftwareId,
    };
  }

  validate() {
    if(this.softwareId && typeof (this.softwareId as any).validate === 'function') {
      (this.softwareId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

