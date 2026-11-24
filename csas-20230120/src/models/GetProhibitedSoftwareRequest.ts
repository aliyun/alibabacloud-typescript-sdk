// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProhibitedSoftwareRequestSoftwareId extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the prohibited software is a built-in prohibited software. Valid values:
   * - **true**: The software is a built-in prohibited software. It is shared by all Alibaba Cloud accounts and cannot be modified or deleted.
   * - **false**: The software is a custom prohibited software within the current Alibaba Cloud account.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the prohibited software. You can obtain the value from the following operations:
   * - [ListProhibitedSoftware](~~ListProhibitedSoftware~~): Queries prohibited software in batches.
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
   * The ID of the prohibited software.
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

