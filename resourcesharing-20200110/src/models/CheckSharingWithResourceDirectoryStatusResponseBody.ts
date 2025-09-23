// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSharingWithResourceDirectoryStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether resource sharing within a resource directory is enabled. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  enableSharingWithRd?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819545D0-C97A-5DB3-BD73-A1B17E9A4BC1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enableSharingWithRd: 'EnableSharingWithRd',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSharingWithRd: 'boolean',
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

