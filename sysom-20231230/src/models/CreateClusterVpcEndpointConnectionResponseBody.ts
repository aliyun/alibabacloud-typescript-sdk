// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterVpcEndpointConnectionResponseBodyData extends $dara.Model {
  /**
   * @example
   * ep-xxx
   */
  endpointConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointConnectionId: 'endpointConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointConnectionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterVpcEndpointConnectionResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: CreateClusterVpcEndpointConnectionResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateClusterVpcEndpointConnectionResponseBodyData,
      message: 'string',
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

