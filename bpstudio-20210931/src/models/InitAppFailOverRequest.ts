// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitAppFailOverRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 002XWH7MXB8MJRU0
   */
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

