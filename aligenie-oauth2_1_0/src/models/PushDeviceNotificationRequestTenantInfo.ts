// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushDeviceNotificationRequestTenantInfo extends $dara.Model {
  /**
   * @example
   * 12797******304102
   */
  subjectId?: string;
  static names(): { [key: string]: string } {
    return {
      subjectId: 'SubjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

