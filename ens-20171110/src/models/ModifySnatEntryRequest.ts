// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable IP affinity. Default value: true. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * >  Description After you enable IP affinity, if multiple EIPs are associated with an SNAT entry, one client uses the same EIP to for communication. If IP affinity is disabled, the client uses a random EIP for communication.
   * 
   * @example
   * false
   */
  eipAffinity?: boolean;
  /**
   * @example
   * true
   */
  ispAffinity?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * snat-5tfjp36fsrb36zs36faj0****
   */
  snatEntryId?: string;
  /**
   * @example
   * test0
   */
  snatEntryName?: string;
  /**
   * @remarks
   * Separate multiple EIPs in the SNAT entry with commas (,).
   * 
   * @example
   * 120.XXX.XXX.71
   */
  snatIp?: string;
  static names(): { [key: string]: string } {
    return {
      eipAffinity: 'EipAffinity',
      ispAffinity: 'IspAffinity',
      snatEntryId: 'SnatEntryId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAffinity: 'boolean',
      ispAffinity: 'boolean',
      snatEntryId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

