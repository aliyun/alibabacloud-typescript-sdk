// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineScanReportUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /test/test/test.html
   */
  reportPath?: string;
  static names(): { [key: string]: string } {
    return {
      reportPath: 'reportPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

