// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPrepaidCardsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the prepaid card takes effect. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  effectiveOrNot?: boolean;
  /**
   * @remarks
   * The end of the expiration time of prepaid cards to query. The value must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeEnd?: string;
  /**
   * @remarks
   * The start of the expiration time of prepaid cards to query. The value must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveOrNot: 'EffectiveOrNot',
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveOrNot: 'boolean',
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

