// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAttackTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can use this ID for troubleshooting and log tracing.
   * 
   * @example
   * 1EBD0C05-6C1F-4C95-9C63-B7AB7B5A9C8E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

