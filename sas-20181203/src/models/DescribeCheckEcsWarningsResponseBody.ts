// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckEcsWarningsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you use the free trial of Security Center. Valid values:
   * - **0**: no
   * - **1**: yes
   * 
   * @example
   * 0
   */
  canTry?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D
   */
  requestId?: string;
  /**
   * @remarks
   * The edition of Security Center that you use. Valid values:
   * 
   * *   **1**: Basic edition
   * *   **2** or **3**: Enterprise edition
   * *   **5**: Advanced edition
   * *   **6**: Anti-virus edition
   * 
   * >  Both the value 2 and the value 3 indicate the Enterprise edition.
   * 
   * @example
   * 3
   */
  sasVersion?: string;
  /**
   * @remarks
   * The number of weak passwords that can cause high risks to your assets.
   * 
   * @example
   * 3
   */
  weakPasswordCount?: string;
  static names(): { [key: string]: string } {
    return {
      canTry: 'CanTry',
      requestId: 'RequestId',
      sasVersion: 'SasVersion',
      weakPasswordCount: 'WeakPasswordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTry: 'string',
      requestId: 'string',
      sasVersion: 'string',
      weakPasswordCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

