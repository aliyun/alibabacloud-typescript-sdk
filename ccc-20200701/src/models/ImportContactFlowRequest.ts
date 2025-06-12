// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportContactFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  flowPackageData?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9cfad875-6260-4a53-ab6e-b13e3fb31f7d
   */
  instanceId?: string;
  /**
   * @example
   * DE803553-8AA9-4B9D-9E4E-A82BC69EDCEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowPackageData: 'FlowPackageData',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowPackageData: 'string',
      instanceId: 'string',
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

