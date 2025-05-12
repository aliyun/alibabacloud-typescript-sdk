// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteElasticRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the deletion is successful.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

