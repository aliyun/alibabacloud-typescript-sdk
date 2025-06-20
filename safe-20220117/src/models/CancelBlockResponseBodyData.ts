// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CancelBlockResponseBodyData extends $dara.Model {
  approveInstanceId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      approveInstanceId: 'ApproveInstanceId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveInstanceId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

