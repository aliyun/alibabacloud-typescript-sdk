// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIQueryResultRequest extends $dara.Model {
  /**
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

