// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomEndpointResponseBodyData extends $dara.Model {
  /**
   * @example
   * pxe-c4gkgqg****7sgyg
   */
  customEndpointId?: string;
  /**
   * @example
   * pxc-*********
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      customEndpointId: 'CustomEndpointId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEndpointId: 'string',
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

export class CreateCustomEndpointResponseBody extends $dara.Model {
  data?: CreateCustomEndpointResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2DFF784E-DC31-5BBC-9B25-9261CD9E0AA9
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
      data: CreateCustomEndpointResponseBodyData,
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

