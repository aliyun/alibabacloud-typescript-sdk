// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversionDataIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The conversion rate monitoring value.
   * >This parameter is of the double type. Valid values: [0,1].
   * 
   * This parameter is required.
   * 
   * @example
   * 0.53
   */
  conversionRate?: string;
  ownerId?: number;
  /**
   * @remarks
   * The point in time when the conversion rate is observed. The value must be a Unix timestamp in milliseconds, represented as a long integer.
   * 
   * >If you do not specify this parameter, the current timestamp is used by default.
   * 
   * @example
   * 1349055900000
   */
  reportTime?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      conversionRate: 'ConversionRate',
      ownerId: 'OwnerId',
      reportTime: 'ReportTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionRate: 'string',
      ownerId: 'number',
      reportTime: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

