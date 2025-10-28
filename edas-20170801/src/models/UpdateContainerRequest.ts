// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContainerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * e83acea6-****-47e1-96ae-c0e953772cdc
   */
  appId?: string;
  /**
   * @remarks
   * The build package number of EDAS Container. You can obtain the build package number in the Build package number column in the EDAS Container release notes table. For more information, see [Release notes for EDAS Container](https://help.aliyun.com/document_detail/92614.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 59
   */
  buildPackId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      buildPackId: 'BuildPackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      buildPackId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

