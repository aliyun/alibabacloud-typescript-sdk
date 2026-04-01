// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceEndpointAddressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoint ID of the instance.
   * 
   * @example
   * ep-****
   */
  DBInstanceEndpointId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-****
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceEndpointId: 'DBInstanceEndpointId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceEndpointId: 'string',
      DBInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceEndpointAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyDBInstanceEndpointAddressResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90496720-2319-42A8-87CD-FCE4DF95EBED
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
      data: ModifyDBInstanceEndpointAddressResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

