// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseOrgQueryLoadTreeResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * A93073FC-1E86-58BA-AB83-54DA6BDB4F03
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  treeDto?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      treeDto: 'TreeDto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      treeDto: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

