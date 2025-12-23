// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateWorkflowResponseBodyData extends $dara.Model {
  /**
   * @example
   * w-acfmv4opbs****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      workflowId: 'workflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowResponseBody extends $dara.Model {
  data?: CreateWorkflowResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9E3A7161-EB7B-172B-8D18-FFB06BA38***
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: CreateWorkflowResponseBodyData,
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

