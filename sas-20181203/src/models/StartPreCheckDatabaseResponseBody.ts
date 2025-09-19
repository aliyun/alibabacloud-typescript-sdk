// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPreCheckDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the database precheck task.
   * 
   * @example
   * t-0006d4pydyir6l1k****
   */
  createMark?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F6DC2DFF-AB3A-563A-8FC2-3D0D991E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createMark: 'CreateMark',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMark: 'string',
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

