// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCdsFileResponseBodyFileModel } from "./CreateCdsFileResponseBodyFileModel";


export class CreateCdsFileResponseBody extends $dara.Model {
  fileModel?: CreateCdsFileResponseBodyFileModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BAFE05D-FFB9-5938-96D0-08017DB9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileModel: 'FileModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileModel: CreateCdsFileResponseBodyFileModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fileModel && typeof (this.fileModel as any).validate === 'function') {
      (this.fileModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

