// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIPv6TranslatorEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPv6 Translation Service instance.
   * 
   * @example
   * ipv6transentry-xxxxxxxx
   */
  ipv6TranslatorEntryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DCE5D25-FFC9-492A-8371-12A4E0EE2E05
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorEntryId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

