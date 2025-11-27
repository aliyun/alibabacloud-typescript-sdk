// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Session extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  gmtModified?: string;
  ownerId?: string;
  sessionId?: string;
  sessionTitle?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModified: 'GmtModified',
      ownerId: 'OwnerId',
      sessionId: 'SessionId',
      sessionTitle: 'SessionTitle',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModified: 'string',
      ownerId: 'string',
      sessionId: 'string',
      sessionTitle: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

