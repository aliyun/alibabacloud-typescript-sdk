// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  branchName?: string;
  instanceName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      instanceName: 'InstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      instanceName: 'string',
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

