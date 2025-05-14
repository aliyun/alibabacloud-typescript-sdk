// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetContentAnalyzeConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 953CFD27-4A2C-54AD-857F-B79EF3A338E0
   */
  requestId?: string;
  /**
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

