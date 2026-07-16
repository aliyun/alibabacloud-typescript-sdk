// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The version number of the cloned version.
   * 
   * @example
   * 1
   */
  cloneVersion?: number;
  /**
   * @remarks
   * The version number that was cloned.
   * 
   * @example
   * 0
   */
  originVersion?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloneVersion: 'CloneVersion',
      originVersion: 'OriginVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneVersion: 'number',
      originVersion: 'number',
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

