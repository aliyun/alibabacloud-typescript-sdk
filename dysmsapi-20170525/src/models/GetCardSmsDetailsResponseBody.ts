// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCardSmsDetailsResponseBodyCardSendDetailDTO } from "./GetCardSmsDetailsResponseBodyCardSendDetailDto";


export class GetCardSmsDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied detail; this field is returned only if the RAM check fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Card SMS sending result
   */
  cardSendDetailDTO?: GetCardSmsDetailsResponseBodyCardSendDetailDTO;
  /**
   * @remarks
   * Request status code.
   * * OK indicates a successful request.
   * * For other error codes, see [API Error Codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Values:
   * - **true** - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      cardSendDetailDTO: 'CardSendDetailDTO',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      cardSendDetailDTO: GetCardSmsDetailsResponseBodyCardSendDetailDTO,
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.cardSendDetailDTO && typeof (this.cardSendDetailDTO as any).validate === 'function') {
      (this.cardSendDetailDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

