// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployCustomContainerOutputData } from "./DeployCustomContainerOutputData";


export class DeployCustomContainerOutput extends $dara.Model {
  data?: DeployCustomContainerOutputData;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeployCustomContainerOutputData,
      errCode: 'string',
      errMsg: 'string',
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

