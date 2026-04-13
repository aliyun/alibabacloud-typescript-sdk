// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1557******4904
   */
  ownerId?: string;
  /**
   * @example
   * ECB1F5******C1BF5223
   */
  requestId?: string;
  /**
   * @example
   * se-j6p******dram6
   */
  sessionId?: string;
  title?: string;
  /**
   * @example
   * 27******94904
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModified: 'GmtModified',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModified: 'string',
      ownerId: 'string',
      requestId: 'string',
      sessionId: 'string',
      title: 'string',
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

