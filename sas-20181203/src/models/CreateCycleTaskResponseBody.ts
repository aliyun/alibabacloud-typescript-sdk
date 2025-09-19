// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCycleTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the task configuration.
   * 
   * @example
   * 00cfa8161da093089e6804ba6a33****
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 86CFF42E-E00A-57A3-8656-22291EFB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
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

