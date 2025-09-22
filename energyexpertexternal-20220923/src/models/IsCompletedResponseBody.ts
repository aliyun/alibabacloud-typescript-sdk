// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsCompletedResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Modified time in milliseconds, e.g. 1711438780000.
   * 
   * @example
   * 1711438780000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The unique key of this generation task.
   * 
   * @example
   * 550c2b7b-f2e0-4176-ab0a-53ea4b355721
   */
  taskKey?: string;
  /**
   * @remarks
   * Unused temporarily.
   * 
   * @example
   * null
   */
  taskShortResult?: string;
  /**
   * @remarks
   * The status of the report generation task. The possible values are `running`, `success`, and `error`, which mean generating, generating succeeded, and generating failed, respectively. If you encounter a result generation failure, check the model, correct the model, and then generate the result again.
   * 
   * @example
   * running
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'modifiedTime',
      taskKey: 'taskKey',
      taskShortResult: 'taskShortResult',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'number',
      taskKey: 'string',
      taskShortResult: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsCompletedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: IsCompletedResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: IsCompletedResponseBodyData,
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

