// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyActivityAdmissionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  activityId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  idCardNo?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      idCardNo: 'IdCardNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      idCardNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

