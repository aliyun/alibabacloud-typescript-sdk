// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppFailOverRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * BE68D71ZY5YYIU9R
   */
  applicationId?: string;
  /**
   * @remarks
   * The destination zone to which you want to switch the disaster recovery application.
   * 
   * @example
   * cn-hangzhou-g
   */
  failZone?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      failZone: 'FailZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      failZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

