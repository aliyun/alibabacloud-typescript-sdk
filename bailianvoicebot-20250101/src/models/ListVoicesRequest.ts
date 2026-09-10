// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoicesRequest extends $dara.Model {
  /**
   * @remarks
   * The Bailian workspace ID.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The TTS call method.
   * 
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @remarks
   * The TTS engine.
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The value is fixed at 1000 and cannot be modified.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      nlsAccessType: 'NlsAccessType',
      nlsEngine: 'NlsEngine',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      nlsAccessType: 'string',
      nlsEngine: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

