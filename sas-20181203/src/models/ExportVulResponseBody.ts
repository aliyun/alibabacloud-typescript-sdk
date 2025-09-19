// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportVulResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the exported file.
   * 
   * @example
   * app_20211101
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the exported file.
   * 
   * @example
   * 81634
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * E1FAB2B8-DF4D-55DF-BC3D-5C3CA6FD5B13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      id: 'number',
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

