// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether DLF\\"s service-linked role has been created.
   * 
   * @example
   * true
   */
  serviceRoleExists?: boolean;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      serviceRoleExists: 'serviceRoleExists',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceRoleExists: 'boolean',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

