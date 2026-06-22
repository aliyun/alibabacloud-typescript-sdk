// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckEcsWarningsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current Security Center edition is a trial version. Valid values:
   * - **0**: not a trial version
   * - **1**: a trial version.
   * 
   * @example
   * 0
   */
  canTry?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D
   */
  requestId?: string;
  /**
   * @remarks
   * The edition of Security Center that you purchased. Valid values:
   * 
   * - **1**: Free Edition
   * - **2** or **3**: Enterprise Edition  
   * - **5**: Premium Edition  
   * - **6**: Anti-virus Edition
   * 
   * > Both 2 and 3 correspond to Enterprise Edition. There is no difference between the two values.
   * 
   * @example
   * 3
   */
  sasVersion?: string;
  /**
   * @remarks
   * The number of high-risk weak password risks detected in your assets.
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

