// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSkillVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The skill version.
   * 
   * @example
   * ba9b5c2466dc408c9fcd9df72bcd762a
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BE66410A-37F8-55C5-8471-589CA195760C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

