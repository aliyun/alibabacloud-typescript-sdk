// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserResourcePackageRequest extends $dara.Model {
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The status of the resource plan. Valid values:
   * 
   * *   **valid**: valid
   * *   **closed**: expired
   * *   If you leave this parameter empty, all resource plans are queried.
   * 
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

