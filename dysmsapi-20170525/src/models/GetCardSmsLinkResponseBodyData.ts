// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCardSmsLinkResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The mobile phone numbers that support card messages.
   * 
   * @example
   * [\\"1390000****\\",\\"1370000****\\"]
   */
  cardPhoneNumbers?: string;
  /**
   * @remarks
   * The signatures must correspond to the mobile numbers and short URLs in sequence.
   * 
   * @example
   * ["aliyun","aliyun2"]
   */
  cardSignNames?: string;
  /**
   * @remarks
   * The short URLs.
   * 
   * @example
   * [\\"mw2m.cn/LAaGGa\\",\\"mw2m.cn/LAAaes\\"]
   */
  cardSmsLinks?: string;
  /**
   * @remarks
   * The review status of the card message template.
   * 
   * *   **0**: pending approval
   * *   **1**: approved
   * *   **2**: rejected
   * 
   * > Unapproved card messages are rolled back.
   * 
   * @example
   * 0
   */
  cardTmpState?: number;
  /**
   * @remarks
   * The mobile phone numbers that do not support card messages.
   * 
   * @example
   * 1390000****
   */
  notMediaMobiles?: string;
  static names(): { [key: string]: string } {
    return {
      cardPhoneNumbers: 'CardPhoneNumbers',
      cardSignNames: 'CardSignNames',
      cardSmsLinks: 'CardSmsLinks',
      cardTmpState: 'CardTmpState',
      notMediaMobiles: 'NotMediaMobiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardPhoneNumbers: 'string',
      cardSignNames: 'string',
      cardSmsLinks: 'string',
      cardTmpState: 'number',
      notMediaMobiles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

