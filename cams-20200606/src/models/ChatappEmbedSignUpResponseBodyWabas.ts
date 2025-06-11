// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatappEmbedSignUpResponseBodyWabas extends $dara.Model {
  /**
   * @remarks
   * The review state of the WABA.
   * 
   * @example
   * VERIFIED
   */
  accountReviewStatus?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the WABA.
   * 
   * @example
   * 2939933992*****
   */
  id?: string;
  /**
   * @remarks
   * The namespace of the message template.
   * 
   * @example
   * alals-lsslls-slslsos-slsl
   */
  messageTemplateNamespace?: string;
  /**
   * @remarks
   * The name of the WABA.
   * 
   * @example
   * Alibaba
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountReviewStatus: 'AccountReviewStatus',
      currency: 'Currency',
      id: 'Id',
      messageTemplateNamespace: 'MessageTemplateNamespace',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountReviewStatus: 'string',
      currency: 'string',
      id: 'string',
      messageTemplateNamespace: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

