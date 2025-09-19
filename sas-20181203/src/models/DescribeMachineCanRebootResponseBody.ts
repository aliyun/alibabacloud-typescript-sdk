// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineCanRebootResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the server can be restarted. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  canReboot?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925FDAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      canReboot: 'CanReboot',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canReboot: 'boolean',
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

