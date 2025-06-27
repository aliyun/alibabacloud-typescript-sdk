// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNisInspectionReportResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

