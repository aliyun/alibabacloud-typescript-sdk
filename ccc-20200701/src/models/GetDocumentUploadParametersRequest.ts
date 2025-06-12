// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentUploadParametersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * blacklist.xlsx
   */
  fileName?: string;
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
   * 24BE19E8-BF7D-4992-A35E-15EBA874F2E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
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

