// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelExecutionReleaseStageRequest extends $dara.Model {
  /**
   * @example
   * 66c0c9fffeb86b450c19****
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

