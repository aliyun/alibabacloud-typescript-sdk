// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceHealerResponseBodyInstanceHealerModel extends $dara.Model {
  /**
   * @remarks
   * The result of the task execution.
   * 
   * @example
   * True
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceHealerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnosis result object.
   */
  instanceHealerModel?: InstanceHealerResponseBodyInstanceHealerModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceHealerModel: 'InstanceHealerModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceHealerModel: InstanceHealerResponseBodyInstanceHealerModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceHealerModel && typeof (this.instanceHealerModel as any).validate === 'function') {
      (this.instanceHealerModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

