// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePushReviewOnOffRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  trunkMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'organizationId',
      trunkMode: 'trunkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      trunkMode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

