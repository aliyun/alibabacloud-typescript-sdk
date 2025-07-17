// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPromInstallStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * true: The call was successful. false: The call fails.
   * 
   * @example
   * true
   */
  isControllerInstalled?: boolean;
  static names(): { [key: string]: string } {
    return {
      isControllerInstalled: 'isControllerInstalled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isControllerInstalled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPromInstallStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned struct.
   */
  data?: QueryPromInstallStatusResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 27E653FA-5958-45BE-8AA9-14D884DC****
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
      data: QueryPromInstallStatusResponseBodyData,
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

