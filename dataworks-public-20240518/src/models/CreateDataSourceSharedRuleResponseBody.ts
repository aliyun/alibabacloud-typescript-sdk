// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceSharedRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The sharing rule ID.
   * 
   * @example
   * 105412
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request. It is used to locate logs and troubleshoot problems.
   * 
   * @example
   * 46F594E6-84AB-5FA5-8144-6F3D149961E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

