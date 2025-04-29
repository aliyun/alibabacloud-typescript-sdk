// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOperatorAttributeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The basic carrier. Valid values:
   * 
   * *   **China Mobile**
   * *   **China Unicom**
   * *   **China Telecom**
   * *   **China Broadnet**
   * 
   * @example
   * China Mobile
   */
  basicCarrier?: string;
  /**
   * @remarks
   * The actual carrier, including the virtual network operator (VNO). If the phone number involves mobile number portability, the value of this parameter is the carrier after mobile number portability.
   * 
   * @example
   * China Mobile
   */
  carrier?: string;
  /**
   * @remarks
   * The city where the phone number is registered.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @remarks
   * Indicates whether the phone number involves mobile number portability. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isNumberPortability?: boolean;
  /**
   * @remarks
   * The number segment to which the phone number belongs.
   * 
   * @example
   * 139
   */
  numberSegment?: number;
  /**
   * @remarks
   * The province where the phone number is registered.
   * 
   * @example
   * zhejiang
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      carrier: 'Carrier',
      city: 'City',
      isNumberPortability: 'IsNumberPortability',
      numberSegment: 'NumberSegment',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      carrier: 'string',
      city: 'string',
      isNumberPortability: 'boolean',
      numberSegment: 'number',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

