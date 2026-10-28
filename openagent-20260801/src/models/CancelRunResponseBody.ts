// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CancelRunResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * run_example_001
   */
  runId?: string;
  /**
   * @remarks
   * The run status. If the cancellation is successful, the value is fixed to `CANCELLED`.
   * 
   * @example
   * CANCELLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      runId: 'runId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: 'string',
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

export class CancelRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: CancelRunResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CancelRunResponseBodyData,
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

