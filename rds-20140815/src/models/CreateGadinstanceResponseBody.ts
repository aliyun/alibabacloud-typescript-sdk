// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGADInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The number of nodes created by this call.
   * 
   * @example
   * 2
   */
  createMemberCount?: string;
  /**
   * @remarks
   * The GAD cluster ID.
   * 
   * @example
   * gad-rm-bp1npi2j8****
   */
  gadInstanceName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 5374****
   */
  taskID?: string;
  static names(): { [key: string]: string } {
    return {
      createMemberCount: 'CreateMemberCount',
      gadInstanceName: 'GadInstanceName',
      taskID: 'TaskID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMemberCount: 'string',
      gadInstanceName: 'string',
      taskID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGADInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F8C06AD-3F37-57A0-ABBF-ABD7824F55CE
   */
  requestId?: string;
  /**
   * @remarks
   * The array of returned information.
   */
  result?: CreateGADInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateGADInstanceResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

