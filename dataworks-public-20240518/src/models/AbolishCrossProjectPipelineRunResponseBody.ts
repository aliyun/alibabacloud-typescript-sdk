// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbolishCrossProjectPipelineRunResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
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

export class AbolishCrossProjectPipelineRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response.
   * 
   * @example
   * {"RequestId":"735894D1-D5E5-50B8-8A6D-041C90A98B23"}
   */
  data?: AbolishCrossProjectPipelineRunResponseBodyData;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot this API call.
   * 
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AbolishCrossProjectPipelineRunResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

