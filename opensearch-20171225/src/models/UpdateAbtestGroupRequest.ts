// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ABTestGroup } from "./AbtestGroup";


export class UpdateABTestGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The request body. For more information, see [ABTestGroup](https://help.aliyun.com/document_detail/178935.html).
   */
  body?: ABTestGroup;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - true: Performs a dry run. The system checks if the AccessKey is valid, if the RAM user is authorized, and if all required parameters are specified. The test group is not updated.
   * 
   * - false (default): Sends the request to update the test group.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ABTestGroup,
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

