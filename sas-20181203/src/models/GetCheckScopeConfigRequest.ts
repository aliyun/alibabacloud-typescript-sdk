// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckScopeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. This parameter is optional. If you do not specify this parameter, a default ID is generated.
   * 
   * @example
   * 435f626256ebf564cf5ba966a539****
   */
  configId?: number;
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

