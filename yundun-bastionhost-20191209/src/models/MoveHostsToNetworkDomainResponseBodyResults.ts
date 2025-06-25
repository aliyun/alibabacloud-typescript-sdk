// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveHostsToNetworkDomainResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The return code that indicates whether the host is added to the network domain.
   * 
   * > The code LICENSE_OUT_OF_LIMIT indicates that the network domain feature is not supported by the current Bastionhost edition.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The host ID.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The error message that is returned.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostId: 'HostId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

